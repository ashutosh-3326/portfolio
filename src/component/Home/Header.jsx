import React, { useState, useEffect } from 'react';
import styles from '../../styles/header.module.css';

function Header() {
  const [showNavbar, setShowNavbar] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To keep track of last scroll position

  // Function to handle scroll direction
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      // Check if the user is scrolling down or up
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    }
  };

  useEffect(() => {
    // Adding scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency array to run the effect on scrollY change

  return (
    <nav className={`${styles.navbar} ${showNavbar ? styles.showNavbar : styles.hideNavbar}`}>
      <div className={styles.navbarLogo}>
        
        <a href="/">Portfolio</a>
      </div>
      <div className={styles.navlink}>
        <ul className={styles.navbarLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
