import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/layout.module.css'

export default function Layout({children}) {

  return (
      <div className={styles.mainContainer}>
            <div className={styles.banner}>
                  <div className={styles.logoContainer}>
                        <Image
                              src="/logo.png"
                              fill           
                              alt="app logo" 
                        />
                  </div>
                  <h1 className={styles.title}>GARAGE AUTOMOBILE VINCENT PARROT</h1>
                  <div className={styles.rightDiv}>
                        <p>Depuis 2021</p>
                        <p>31000 Toulouse</p>
                  </div>
            </div>
            {children}
      </div>
  )
}
