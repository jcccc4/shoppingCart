import styles from './Product.module.css'

function Card({id, name, item, setCheckoutList}) {
    const addCartHandler = ()=>{
      setCheckoutList((checkoutItem)=>{
        return [...checkoutItem,item]})   
    }
    return (
      <div id={id} className={styles.card}>
        <div className={styles.name} >{name}</div>
        <div className={styles.image}>Image</div>
        <div className={styles.price}>Price</div>
        <button onClick={addCartHandler} className={styles.addCart}>Add to Cart</button>
        <div className={styles.count}>Count</div>
      </div>
    )
  }
  
  export default Card