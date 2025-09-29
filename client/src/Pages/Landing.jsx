import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="w-full bg-black p-4 flex gap-4">
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </Link>
        <Link to="/signin" className="text-white px-4 py-2 rounded border border-white">
          Sign in
        </Link>

         <Link to="/home" className="text-white px-4 py-2 rounded border border-white">
          Home
        </Link>
      </div>
    </>
  );
}

export default Landing;
