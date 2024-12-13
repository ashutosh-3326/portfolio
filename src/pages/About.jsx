import React from 'react';
// import styles from '../../styles/AboutUs.module.css';
import styles from '../styles/about.module.css';
import { Link } from 'react-router-dom';

import img from '../assets/img2.jpeg';
import Adventure from './Adventure';
// import Footer from '../component/Home/Footer';
// import Header from '../component/Home/Header';

// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import Footer from '../component/Home/Footer';
import Header from '../component/Home/Header';
import logo1 from '../assets/graduate.png';
import logo2 from '../assets/student.png';
import logo3 from '../assets/education.png'
import banner from '../assets/banner3.jpg'
import about from '../assets/technology.jpg'
import Achievement from './Achievement';
import Gallery from './Gallery'
import SocialIcon from './SocialIcon';

function AboutUs() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>        

        <img src={about} alt="About us" /><SocialIcon/>

        <div className={styles.textOverlay}>About Us</div>
      </div>
      <div className={styles.aboutPage}>
        {/* Header Section */}
        <div className={styles.aboutHeader}>
          <h1>FrontEnd Developer</h1>
         
         
         
        </div>

        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.photo}>
          <img src={img} alt="Profile Picture" />
          </div>
          <div className={styles.profileText}>
            <h2>Hello, I'm  [ Ashutosh Kumar ]</h2>
            <p>
              I'm a passionate web developer with experience in creating dynamic and responsive websites. I specialize in front-end development, working with technologies such as React, JavaScript, and CSS. I enjoy solving complex problems and always strive to write clean, maintainable code.
            </p>
          </div>
        </div>

        {/* ///banner/// */}

        <div className={styles.banner}>
        <Link to="/contact" >  <img src={banner} alt="" /> </Link>
        <button className={styles.bannerBtn}>Contact Me</button>
        </div>

        {/* Skills Section */}
        <div className={styles.skills}>
  <h1>Education Details</h1>
  <div className={styles.skillsSection}>
    <div className={styles.skillCard}>
      <div className={styles.logo}>
        <img src={logo1} alt="" />
      </div>
      <h3>Graduation</h3>
      <p>BENGAL COLLEGE OF ENGINEERING AND TECHNOLOGY [DURGAPUR]</p>
    </div>

    <div className={styles.skillCard}>
      <div className={styles.logo}>
        <img src={logo2} alt="" />
      </div>
      <h3>Intermediate</h3>
      <p>MAHABODHI MAHAVIDYALAY [NALANDA]</p>
    </div>

    <div className={styles.skillCard}>
      <div className={styles.logo}>
        <img src={logo3} alt="" />
      </div>
      <h3>Matriculation</h3>
      <p>DAV PUBLIC SCHOOL [BIHARSHARIF]</p>
    </div>
  </div>
</div>


       

       

       
      </div>
      <Adventure/>
      <Achievement/>
      <Gallery/>

      <Footer />
    </>
  );
}

export default AboutUs;
