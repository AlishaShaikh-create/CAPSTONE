// import React, { useState } from "react";
// import axios from "axios";
// import '../Styles/SearchUser.css'
// import "../Styles/Dashboard.css";

// const SearchUsers = () => {
//   const [skill, setSkill] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searched, setSearched] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSearched(true);

//     try {
//       const { data } = await axios.post("http://localhost:5000/search", {
//         skill,
//       });

//       setResults(data);
//     } catch (error) {
//       console.error("Error searching users:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleConnect = async (connectWithId) => {
//   try {
//     const userId = "CURRENT_USER_ID"; // replace with actual logged-in user ID
//     await axios.post("http://localhost:5000/connect", { userId, connectWithId });
//     alert("Connected successfully!");
//   } catch (error) {
//     console.error("Error connecting:", error);
//   }
// };


//   return (
//     <div className="search-page">
//       <h2>🔍 Search Users by Skill</h2>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter a skill (e.g., React, Python)"
//           value={skill}
//           onChange={(e) => setSkill(e.target.value)}
//           required
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Show loader while fetching */}
//       {loading && <p>Searching...</p>}

//       <div className="results-container">
//         {results.length > 0 ? (
//           results.map((user) => (
//             <div key={user._id} className="user-card">
//               <h3>{user.name}</h3>
//               <p>📍 {user.location}</p>
//               <p>
//                 Teaches:{" "}
//                 {Array.isArray(user.teach) ? user.teach.join(", ") : user.teach}
//               </p>
//               <p>
//                 Wants to Learn:{" "}
//                 {Array.isArray(user.learn) ? user.learn.join(", ") : user.learn}
//               </p>
//             </div>
//           ))
//         ) : searched && !loading ? (
//           <p>No users found for "{skill}".</p>
//         ) : (
//           <p>Enter a skill to start searching 🔎</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchUsers;





import React, { useState } from "react";
import axios from "axios";
import "../Styles/Dashboard.css";

const SearchUsers = ({ onConnect }) => {
  const [skill, setSkill] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser?._id;

  // Search users by skill
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    try {
      const { data } = await axios.post("http://localhost:5000/search", { skill });
      setResults(data);
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setLoading(false);
    }
  };

  //chatgpt code 
  // Connect with a user
  // const handleConnect = async (connectWithId) => {
  //   try {
  //     if (!userId) return; // skip if no logged-in user
  //     const { data } = await axios.post("http://localhost:5000/connect", { userId, connectWithId });
  //     if (onConnect && data.connectedUser) {
  //       onConnect(data.connectedUser); // update Dashboard instantly
  //     }
  //   } catch (error) {
  //     console.error("Error connecting with user:", error);
  //   }
  // };

  return (
    <div className="search-page">
      <h2>🔍 Search Users by Skill</h2>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter a skill (e.g., React, Python)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching...</p>}

      <div className="results-container">
        {results.length > 0 ? (
          results.map((user) => (
            <div key={user._id} className="user-card">
              <h3>{user.name}</h3>
              <p>📍 {user.location}</p>
              <p>Teaches: {Array.isArray(user.teach) ? user.teach.join(", ") : user.teach}</p>
              <p>Wants to Learn: {Array.isArray(user.learn) ? user.learn.join(", ") : user.learn}</p>
              <button onClick={() => handleConnect(user._id)}>🤝 Connect</button>
            </div>
          ))
        ) : searched && !loading ? (
          <p>No users found for "{skill}".</p>
        ) : (
          <p>Enter a skill to start searching 🔎</p>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;
