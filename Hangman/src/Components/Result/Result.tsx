import styles from './Result.module.css'
type resultProp = {
  lettersInWord: string[]
}

const Result = ({ lettersInWord }: resultProp) => {
  return (
    <div className={styles.result_container}>
      {lettersInWord.map((letter, index) => (
        <div
          className={styles.letter}
          key={index}
        >
          <p className={styles.hide}>{letter}</p>
        </div>
      ))}
    </div>
  )
}

export default Result
