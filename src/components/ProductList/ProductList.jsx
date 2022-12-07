
import Product from './product/Product';
import styles from './ProductList.module.css';

function ProductList({items, setCheckoutList}) { 
  const itemList = Object.keys(items)
  return (
    <div className={styles.productList}>
      {itemList.map((name,index) =>{
        return <Product 
          key={`product${index}`} 
          id={`product${index}`} 
          name={name}
          count={items[`${name}`].count} 
          setCheckoutList={setCheckoutList}
          />
        })}
      </div>
    )
  }
  
  export default ProductList