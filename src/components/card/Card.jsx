import styles from './Card.module.css'

function Card({id, name, clickHandler, btnText, count}) {
    return (
      <div id={id} className={styles.card}>
        <div className={styles.name} >{name}</div>
        <div className={styles.image}>Image</div>
        <div className={styles.price}>Price</div>
        <button onClick={clickHandler} className={styles.cartButton}>{btnText}</button>
        <div className={styles.count}>
          <button className={styles.counter}>{'<'}</button>
          <div>{count}</div>
          <button className={styles.counter}>{'>'}</button>
        </div>
      </div>
    )
  }
  
  export default Card