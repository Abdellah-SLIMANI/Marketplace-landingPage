import React from 'react';
import "./header.scss"

function header() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="logo navLink"></li>
                    <li className="navLink"></li>
                    <li className="navLink"></li>
                    <li className="navLink"></li>
                    <li className="navLink"></li>
                </ul>
                <div className="loginSignup">
                    <button className="loginButton"></button>
                    <button className="signUpButton"></button>
                </div>
            </nav>
        </div>
    );
}

export default header;