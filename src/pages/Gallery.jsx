import React from 'react'
import styles from '../styles/gallery.module.css'
import image1 from '../assets/img3.jpeg'
import image2 from '../assets/img1.jpeg'
import image3 from '../assets/pc1.jpeg'
import image4 from '../assets/bulb.jpg'
import image5 from '../assets/bulb.jpg'
import image6 from '../assets/ashu.jpg'
import image7 from '../assets/bulb.jpg'



function Gallery() {
  return (
    <div className={styles.gallery}>
  <h1>Image Gallery</h1>
  <div className={styles.galleryContainer}>
    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image1} alt="Gallery Item 1" />
    </div>

    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image2} alt="Gallery Item 2" />
    </div>

    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image3} alt="Gallery Item 3" />
    </div>

    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image4} alt="Gallery Item 4" />
    </div>

    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image5} alt="Gallery Item 5" />
    </div>
    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image6} alt="Gallery Item 5" />
    </div>
    <div className={styles.galleryItem} style={{ clipPath: 'inset(0%)' }}>
      <img src={image7} alt="Gallery Item 5" />
    </div>
  </div>
</div>
  )
}


export default Gallery
