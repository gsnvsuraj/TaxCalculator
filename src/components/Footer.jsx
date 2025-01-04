import React from 'react';
import '../styles/Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-caution">
                ⚠️ <strong>Note:</strong> The tax calculator is for reference purposes only and may not reflect actual calculations. Please consult a tax professional for accurate advice.
            </p>
            <p className="footer-copyright">
                © {currentYear} Tax Engine. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;