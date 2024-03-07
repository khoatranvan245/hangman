import styles from './Hangman.module.css'

const Hangman = () => {
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
        <div className={styles.head}></div>
        <div className={styles.body}></div>
        <div className={styles.arm}>
          <div className={styles.left_arm}></div>
          <div className={styles.right_arm}></div>
        </div>
        <div className={styles.leg}>
          <div className={styles.left_leg}></div>
          <div className={styles.right_leg}></div>
        </div>
      </div>
    </div>
  )
}

export default Hangman
