import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p><small>Copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;