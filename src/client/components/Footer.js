import React from 'react';

const Footer = () => (
    <div>
        <hr/>
        <footer className = "container-fluid text-center">
            <p>&copy; {new Date().getFullYear()} gzavlanis.github.io, All rights reserved.</p>
        </footer>
    </div>
);

export default Footer;