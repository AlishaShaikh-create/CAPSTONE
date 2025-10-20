// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home()
// {
//     return(
//         <>
//         <div>
//             <label htmlFor=" search "></label>
//             <input type="text" placeholder="Search based on skills" id="search"></input>
//             <button>Search</button>
//         </div>
//         </>


//     )
// }

// export default Home();


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./AlertContext";
import Alert from "./Alert";
import "../Styles/Landing.css";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { showAlert } = useAlert();
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            showAlert({ type: "danger", msg: "Please enter a skill to search" });
            return;
        }
        const userId = localStorage.getItem("userId");
        if (!userId) {
            showAlert({ type: "danger", msg: "Please log in to search" });
            navigate("/login");
            return;
        }
        navigate(`/dashboard/search?skill=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <div className="landing-page">
            <Alert />
            <section className="landing-hero">
                <div className="hero-content">
                    <h1 className="hero-title">Learn. Teach. Connect.</h1>
                    <p className="hero-subtitle">The platform where skills meet opportunity</p>
                    <div className="search-form">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search based on skills"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                        />
                        <button className="btn-primary" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;