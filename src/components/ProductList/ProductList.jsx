import Product from './product/Product';
import styles from './ProductList.module.css';

export default function ProductList({itemList, clickHandler, btnText, addItemHandler,deductItemHandler, modelType}) { 
  console.log(modelType)
  return (
    <div className={styles.productList}>
      {Object.keys(itemList).map((name,index) =>{
        return <Product 
          key={`product${index}`} 
          id={`product${index}`} 
          name={name}
          count={itemList[`${name}`].count} 
          btnText={btnText}
          clickHandler={clickHandler}
          addItemHandler={addItemHandler}
          deductItemHandler = {deductItemHandler}
          modelType = {modelType}
          />
      })}
    </div>
  )
}
  