import { useContext, useState } from 'react'
import styles from './Key.module.css'
import { LetterContext } from '../../App'

type letterType = {
  letter: string
}

const Key = ({ letter }: letterType) => {
  const [isClicked, setIsClicked] = useState(false)
  const [lettersInWord, setHealth] = useContext(LetterContext)

  const handleKeyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClicked) {
      setIsClicked(true)
      e.currentTarget.classList.add(styles.disabled)
    }

    if (lettersInWord.includes(e.currentTarget.textContent)) console.log('hey it correct')
    else
      setHealth((prev: number) => {
        let prevHealth = prev
        if (prevHealth > 0) prevHealth -= 1
        return prevHealth
      })
  }

  return (
    <div
      className={styles.key}
      onClick={(e) => handleKeyClick(e)}
    >
      {letter}
    </div>
  )
}

export default Key
