import { useContext, useEffect, useState } from 'react'
import { LetterContext } from '../../App'
import styles from './Hangman.module.css'

const Hangman = () => {
  const [, , health] = useContext(LetterContext)
  const [appearParts, setAppearParts] = useState(-2)

  useEffect(() => {
    const bodyParts = document.querySelectorAll('.' + styles.bodyPart)
    if (appearParts >= 0) bodyParts[appearParts].classList.add(styles.show)
    setAppearParts((prev) => prev + 1)
  }, [health])

  return (
    <div className={styles.hangman_container}>
      <div className={styles.gallow}>
        <div className={styles.hanger}>
          <div className={styles.horizontal_line}></div>
          <div className={styles.vertical_line}></div>
        </div>
        <div className={styles.pillar}></div>
        <div className={styles.base}></div>
      </div>
      <div className={styles.man}>
        <div className={[styles.head, styles.bodyPart].join(' ')}></div>
        <div className={[styles.body, styles.bodyPart].join(' ')}></div>
        <div className={styles.arm}>
          <div className={[styles.left_arm, styles.bodyPart].join(' ')}></div>
          <div className={[styles.right_arm, styles.bodyPart].join(' ')}></div>
        </div>
        <div className={styles.leg}>
          <div className={[styles.left_leg, styles.bodyPart].join(' ')}></div>
          <div className={[styles.right_leg, styles.bodyPart].join(' ')}></div>
        </div>
      </div>
    </div>
  )
}

export default Hangman
