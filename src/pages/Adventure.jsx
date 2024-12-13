import React from 'react'
import img1 from '../assets/mountain.jpg';
import img2 from '../assets/beach3.jpg';
import img3 from '../assets/urban.jpg';
import styles from '../styles/adventure.module.css'

function Adventure() {
  return (
    <div>
       {/* Adventurous & Travel Section */}
       <div className={styles.adventureSection}>
          <h2>Adventures & Travels</h2>
          <p>
            Traveling and experiencing new cultures is one of my greatest passions. Whether it's trekking through mountains or exploring the beauty of cities around the world, I thrive on adventure. Here are a few of my favorite travel memories:
          </p>

          {/* Travel Outlets (Images of famous travel spots) */}
          <div className={styles.travelOutlets}>
            <div>
              <img src={img1} alt="Mountain Trekking" />
              <p>Trekking in the Himalayas</p>
            </div>
            <div>
              <img src={img2} alt="Beach Vacation" />
              <p>Relaxing on the Caribbean Beaches</p>
            </div>
            <div>
              <img src={img3} alt="City Tour" />
              <p>Exploring Urban Culture in Tokyo</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className={styles.testimonialsSection}>
          <h2>Testimonials</h2>
          <p>Here's what people have to say about me:</p>
          <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialCard}>
              <p>"Ashutosh is an exceptional developer with a keen eye for detail. Highly recommend!"</p>
              <h4>- John Doe, CEO at TechCorp</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p>"A true professional who delivers on time and exceeds expectations."</p>
              <h4>- Jane Smith, Project Manager</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Collaborating with Ashutosh was a fantastic experience. Amazing skills and creativity!"</p>
              <h4>- Michael Lee, Designer</h4>
            </div>
          </div>
        </div> */}

 

    </div>
  )
}

export default Adventure
