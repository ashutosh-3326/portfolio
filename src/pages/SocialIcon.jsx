import React from 'react'
import styles from '../styles/socialIcon.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";



function SocialIcon() {
  return (
    <div>
      <div className={styles.icons}>
      <FaFacebookSquare />
      <FaInstagramSquare />
      <FaLinkedin />



      </div>
    </div>
  )
}

export default SocialIcon
