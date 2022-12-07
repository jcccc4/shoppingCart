import ProductList from "../../components/productList/ProductList"

export default function Store({ itemList, clickHandler, btnText, addItemHandler, deductItemHandler}) {
  

  return (
    <div className="Store">
      <div>Store Page</div>
      <ProductList itemList={itemList} clickHandler={clickHandler} btnText={btnText} addItemHandler={addItemHandler} deductItemHandler={deductItemHandler}/>
    </div>
  )
}