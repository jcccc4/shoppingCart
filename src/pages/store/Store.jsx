import ProductList from "../../components/productList/ProductList"

export default function Store({ itemList, clickHandler, btnText}) {
  

  return (
    <div className="Store">
      <div>Store Page</div>
      <ProductList itemList={itemList} clickHandler={clickHandler} btnText={btnText}/>
    </div>
  )
}