import React from 'react'
import styles from '../styles/Achievement.module.css'
import techLogo1 from '../assets/logo/react.png'
import techLogo2 from'../assets/logo/node.png'
import techLogo3 from'../assets/logo/mern.png'
// import techLogo4 from'../assets/education.png'

function Achievement() {
  return (
    <div>
      <div className={styles.achievements}>
  <h1>My Achievements</h1>
  <div className={styles.achievementsSection}>
    <div className={styles.achievementCard}>
      <div className={styles.achievementLogo}>
        <img src={techLogo1} alt="Tech Achievement 1" />
      </div>
      <h3>Certified React Developer</h3>
      <p>Completed React.js certification with [Certifying Body]</p>
    </div>

    <div className={styles.achievementCard}>
      <div className={styles.achievementLogo}>
        <img src={techLogo2} alt="Tech Achievement 2" />
      </div>
      <h3>Node.js Mastery</h3>
      <p>Advanced training in server-side JavaScript development</p>
    </div>

    <div className={styles.achievementCard}>
      <div className={styles.achievementLogo}>
        <img src={techLogo3} alt="Tech Achievement 3" />
      </div>
      <h3>Full-Stack Developer</h3>
      <p>Worked on various end-to-end full-stack development projects</p>
    </div>

   
  </div>
</div>

    </div>
  )
}

export default Achievement
