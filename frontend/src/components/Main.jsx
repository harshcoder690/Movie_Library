import React from "react";
import { Link } from "react-router-dom";
export const Main = () => {
    return (
        <div>
            <h1>Welcome To My Movie Library App</h1>
            <Link to='/login'>
                <button>LogIn</button>
            </Link>
            <Link to='/signup'>
                <button>SignUp</button>
            </Link>
        </div>
    );
}
