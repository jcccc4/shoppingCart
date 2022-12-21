import ProductList from "../../components/productList/ProductList"

export default function Store({ itemList, btnText, modelType, clickHandler}) {
  console.log(modelType)
  return (
    <div className="Store">
      <div>Store Page</div>
      <ProductList 
        itemList={itemList} 
        btnText={btnText} 
        modelType={modelType}
        clickHandler={clickHandler}/>
    </div>
  )
}