
import ProductList from "../../components/ProductList/ProductList"

function Store({items, setCheckoutList}) {


    return (
      <div className="Store">
        <div>Store Page</div>
        <ProductList items={items} setCheckoutList={setCheckoutList}/>
      </div>
    )
  }
  
  export default Store