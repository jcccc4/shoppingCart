import Card from '../card/Card';
import styles from './ProductList.module.css';

function ProductList() {
    const colors = ['Red', 'Orange','Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
    
    return (
      <div className={styles.productList}>
        {colors.map((color) =>(
          <Card/>
        ))}
      </div>
    )
  }
  
  export default ProductList