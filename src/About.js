import React from 'react';
import './About.module.css'; // Your CSS module for About

const About = () => {
    return (
        <div className="content">
            <p className="fullBox">
                Hi! Welcome to my website. <br /><br />
                I'm a 5th year Computer Engineering Co-op student at the University of Alberta. <br />
                I will be available for full-time employment starting July 1st, 2023. <br /><br />
            </p>
            <div className="fullBox">
                <img src="images/Doggo.png" className="responsive" alt="Dog" />
            </div>
            <p className="fullBox">
                Currently, I am a Logistics Manager for a concrete & asphalt repair business...
                {/* Continue with your text */}
            </p>
        </div>
    );
};

export default About;
