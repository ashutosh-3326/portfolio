import React from 'react';
import styles from '../../styles/header.module.css';

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a href="/">Portfolio</a>
      </div>
      <div className={styles.navlink}>
      <ul className={styles.navbarLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </nav>
  );
}

export default Header;
