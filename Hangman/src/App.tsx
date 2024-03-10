import { createContext, useState } from 'react'
import styles from './App.module.css'
import Hangman from './Components/Hangman/Hangman'
import Keyboard from './Components/Keyboard/Keyboard'
import Result from './Components/Result/Result'

export const LetterContext = createContext<any[]>([])

function App() {
  const [health, setHealth] = useState(6)

  const createArrayFromString = (word: string): string[] => {
    const array: string[] = []
    for (let i: number = 0; i < word.length; i++) {
      array.push(word.charAt(i))
    }
    return array
  }
  let lettersInWord = createArrayFromString('mama')

  console.log(health)

  return (
    <LetterContext.Provider value={[lettersInWord, setHealth, health]}>
      <div className={styles.container}>
        <Hangman />
        <Result
          lettersInWord={lettersInWord}
        />
        <Keyboard />
      </div>
    </LetterContext.Provider>
  )
}

export default App
