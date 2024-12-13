import React from 'react';
import styles from '../../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Title */}
        <h3>Your Portfolio</h3>
        
        {/* Short description */}
        <p>Showcasing my work and projects for the world to see. Let's collaborate!</p>
        
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.footerLinks}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
