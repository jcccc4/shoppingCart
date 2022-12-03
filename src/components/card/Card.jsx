import styles from './Card.module.css'

function Card() {



    return (
      <div className={styles.card}>
        <div className={styles.name} >Name</div>
        <div className={styles.image}>Image</div>
        <div className={styles.price}>Price</div>
        <div className={styles.addCart}>Add to Cart</div>
        <div className={styles.count}>Count</div>
      </div>
    )
  }
  
  export default Card