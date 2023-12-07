import React from 'react';
import './Contact.module.css'; // Assuming you have a CSS module for Contact

const Contact = () => {
    return (
        <div className="content">
            <p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Email: <a style={{ color: 'grey' }} href="mailto:mjbraun@ualberta.ca">mjbraun@ualberta.ca</a>
                <br />Phone: (780)-318-2895
            </p>
        </div>
    );
};

export default Contact;