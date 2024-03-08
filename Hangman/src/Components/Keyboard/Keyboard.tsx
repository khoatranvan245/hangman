import styles from './Keyboard.module.css'
import Key from './Key'

const Keyboard = () => {
  const alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'k',
    'j',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  return (
    <div className={styles.keyboard_container}>
      {alphabet.map((letter, index) => (
        <Key
          key={index}
          letter={letter}
        />
      ))}
    </div>
  )
}

export default Keyboard
