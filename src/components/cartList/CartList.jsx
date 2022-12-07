import Cart from './cart/Cart';
import styles from './CartList.module.css';

function CartList({checkoutList}) { 
  const checkoutItem = Object.keys(checkoutList)
console.log(checkoutList)
  return (
    <div className={styles.cartList}>
      {checkoutItem.map((name,index) =>{
        return <Cart
          key={`Cart${index}`} 
          id={`Cart${index}`} 
          name={name} 
          count={checkoutList[`${name}`].count} 
          />
        })}
      </div>
    )
  }
  
  export default CartList