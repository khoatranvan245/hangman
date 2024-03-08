import { useState } from 'react'
import styles from './Key.module.css'

type letterType = {letter: string}

const Key = ({letter}: letterType)=> {
  const [isClicked, setIsClicked] = useState(false)

  const handleKeyClick = (e:React.MouseEvent<HTMLDivElement>) => {
    if (!isClicked){
      setIsClicked(true)
      e.currentTarget.classList.add(styles.disabled)
    }
  }
  return <div className={styles.key} onClick={e => handleKeyClick(e)}>{letter}</div>
}

export default Key
