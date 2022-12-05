import styles from './Product.module.css'

function Card({id, name}) {



    return (
      <div id={id} className={styles.card}>
        <div className={styles.name} >{name}</div>
        <div className={styles.image}>Image</div>
        <div className={styles.price}>Price</div>
        <button className={styles.addCart}>Add to Cart</button>
        <div className={styles.count}>Count</div>
      </div>
    )
  }
  
  export default Card