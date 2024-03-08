import styles from './Key.module.css'

type letterType = {letter: string}

const Key = ({letter}: letterType)=> {
  return <div className={styles.key}>{letter}</div>
}

export default Key
