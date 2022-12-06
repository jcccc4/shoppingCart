
import Cart from './cart/Cart';
import styles from './CartList.module.css';

function CartList({checkoutList,items}) { 
    console.log(items['product1'])
   
    return (
      <div className={styles.CartList}>
        {checkoutList.map((item,index) =>{
          return <Cart 
            key={`Cart${index}`} 
            id={`Cart${index}`} 
            name={items[item].name} 
            item={item}
            />
        })}
      </div>
    )
  }
  
  export default CartList