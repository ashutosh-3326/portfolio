import React from 'react';
import styles from '../styles/home.module.css';
import hero from '../assets/new-project1.jpg';
import Header from '../component/Home/Header';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from '../component/Home/Footer';
import SocialIcon from './SocialIcon';

function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Hi, I'm <span className={styles.highlight}>Ashutosh Kumar</span></h1>
          <p>A professional web designer and developer</p>
          <button className={styles.ctaButton}>Get in Touch</button>
          <SocialIcon/>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={hero} alt="Hero" className={styles.heroImage} />
        </div>
      </div>

      {/* About Section */}
      <div className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>
          I'm a passionate web designer with a knack for crafting visually appealing and functional websites.
          My expertise lies in creating responsive designs, optimizing user experiences, and bringing ideas to life with clean code.
        </p>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <h2>My Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCard}>Web Design</div>
          <div className={styles.skillCard}>Frontend Development</div>
          <div className={styles.skillCard}>UI/UX Design</div>
        </div>
      </div>

      {/* Social Links Section */}
      {/* <div className={styles.socialSection}>
        <h2>Connect with Me</h2>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default Home;
