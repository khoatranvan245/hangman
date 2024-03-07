import styles from './App.module.css'
import Hangman from './Components/Hangman/Hangman'
function App() {
  return (
    <div className={styles.container}>
      <Hangman/>
    </div>
  )
}

export default App
