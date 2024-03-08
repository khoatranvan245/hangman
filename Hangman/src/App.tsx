import styles from './App.module.css'
import Hangman from './Components/Hangman/Hangman'
import Keyboard from './Components/Keyboard/Keyboard'
import Result from './Components/Result/Result'
function App() {
  return (
    <div className={styles.container}>
      <Hangman />
      <Result word="mama" />
      <Keyboard />
    </div>
  )
}

export default App
