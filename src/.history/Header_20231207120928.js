import React from 'react';
import './Header.module.css'; // Your CSS module for Header

// const Header = () => {
//     return <h1>Header Component</h1>;
// };

const Header = () => {
    return (
        <header>
            <h1>Your Name</h1>
            <p>Computer Engineer | Software Developer</p>
            <a href="https://github.com/yourgithub" target="_blank">GitHub</a> | 
            <a href="https://www.linkedin.com/in/yourlinkedin/" target="_blank">LinkedIn</a>
        </header>
    );
};

export default Header;
