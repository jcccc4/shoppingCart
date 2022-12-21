import Product from './product/Product';
import styles from './ProductList.module.css';

export default function ProductList({itemList, btnText, modelType, clickHandler}) { 
  return (
    <div className={styles.productList}>
      {Object.keys(itemList).map((name,index) =>{
        if("count" in itemList[`${name}`]){
          return <Product 
          key={`product${index}`} 
          id={`product${index}`} 
          name={name}
          count={itemList[`${name}`].count} 
          btnText={btnText}
          modelType = {modelType}
          clickHandler = {clickHandler}
          />
        }
        
      })}
    </div>
  )
}
  