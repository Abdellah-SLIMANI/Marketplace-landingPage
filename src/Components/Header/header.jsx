import React from 'react';
import "./Header.scss"
import { useEffect, useState, useRef } from "react"

function Header({ sticky }) {
    return (
        <div className={sticky ? "headerContainer headerContainer-sticky" : "headerContainer"}>
            <nav>
                <ul>
                    <li className="logo navLink">LOGO HERE</li>
                    <li className="navLink">dropdown</li>
                    <li className="navLink">link</li>
                    <li className="navLink">link</li>
                    <li className="navLink">link</li>
                </ul>
                <div className="loginSignup">
                    <button className="loginButton">Login</button>
                    <button className="signUpButton">Signup</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;