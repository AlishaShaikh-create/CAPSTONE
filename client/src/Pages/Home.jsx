import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    return(
        <>
        <div>
            <label htmlFor=" search "></label>
            <input type="text" placeholder="Search based on skills" id="search"></input>
            <button>Search</button>
        </div>
        </>


    )
}

export default Home();