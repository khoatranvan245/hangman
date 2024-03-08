import styles from './Result.module.css'
type resultProp = { word: string }

const Result = ({ word }: resultProp) => {
  const createArrayFromString = (word: string): string[] => {
    const array: string[] = []

    for (let i: number = 0; i < word.length; i++) {
      array.push(word.charAt(i))
    }

    return array
  }

  let lettersInWord = createArrayFromString(word)

  return (
    <div className={styles.result_container}>
      {lettersInWord.map((letter, index) => (
        <div className={styles.letter} key={index}>
          <p className={styles.hide}>{letter}</p>
        </div>
      ))}
    </div>
  )
}

export default Result
