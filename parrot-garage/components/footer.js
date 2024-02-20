import React, { useState } from 'react'
import styles from '../styles/footer.module.css'

export default function Footer() {

      const [display, setDisplay] = useState(false)
      const [buttonText, setButtonText] = useState("plus")
      const hours = [
            "Lun.: 08:45 - 12:00, 14:00 - 18:00",
            "Mar.: 08:45 - 12:00, 14:00 - 18:00",
            "Mer.: 08:45 - 12:00, 14:00 - 18:00",
            "Jeu.: 08:45 - 12:00, 14:00 - 18:00",
            "Ven.: 08:45 - 12:00, 14:00 - 18:00",
            "Sam.: 08:45 - 12:00",
            "Dim.: Fermé" 
      ]


      function handleButtonClick() {
            setDisplay(!display)
            if (buttonText == "plus"){
                  setButtonText("moins")
            }
            else {
                  setButtonText("plus")
            }
      }

return (
    <div className={styles.mainContainer}>
      <p className={styles.button} onClick={handleButtonClick}>Voir {buttonText}</p>
      {display && <div className={styles.content}>
            <h2>Horaires d'ouverture</h2>
            {hours.map((line, index) =>(
                  <div key={index} className={styles.hoursLine}>
                        <p>{line}</p>
                  </div>
            ))}
      </div>}
    </div>
  )
}
