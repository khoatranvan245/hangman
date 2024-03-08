import styles from './App.module.css'
import Hangman from './Components/Hangman/Hangman'
import Keyboard from './Components/Keyboard/Keyboard'
function App() {
  return (
    <div className={styles.container}>
      <Hangman/>
      <Keyboard/>
    </div>
  )
}

export default App
