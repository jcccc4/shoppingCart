
import Product from './product/Product';
import styles from './ProductList.module.css';

function ProductList({identifier,items, setCheckoutList}) { 
    

    let itemList = Object.keys(items)
    if(identifier === 'checkout'){
      itemList = checkoutList;
      console.log(itemList)
    }
    return (
      <div className={styles.productList}>
        {itemList.map((item,index) =>{
          return <Product 
            key={`product${index}`} 
            id={`product${index}`} 
            name={items[item].name} 
            item={item}
            setCheckoutList={setCheckoutList}
            />
        })}
      </div>
    )
  }
  
  export default ProductList