import React from 'react'
import styles from '../styles/service.module.css'
import Image from 'next/image'

export default function Service({title, imgPath}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
            <Image 
                  src={imgPath}
                  fill
                  alt='service'
            />
      </div>
      <h2>{title}</h2>
    </div>
  )
}
