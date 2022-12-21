import styles from './Card.module.css'

export default function Card({id, name, btnText, count, clickHandler, addProductHandler, deductProductHandler}) {
  return (
      <div id={id} className={styles.card}>
        <div className={styles.name} >{name}</div>
        <div className={styles.image}>Image</div>
        <div className={styles.price}>Price</div>
        <button onClick={clickHandler} className={styles.cartButton}>{btnText}</button>
        <div className={styles.count}>
          <button onClick={deductProductHandler} className={styles.counter}>{'<'}</button>
          <div>{count}</div>
          <button onClick={addProductHandler} className={styles.counter}>{'>'}</button>
        </div>
      </div>
    )
  }