import Card from '../../card/Card'


function Product({id, name, setCheckoutList, count}) {
    const clickHandler = ()=>{
      setCheckoutList((checkoutItem)=>{
        console.log(!checkoutItem.hasOwnProperty(name))
        if(!checkoutItem.hasOwnProperty(name)){
          return {
            ...checkoutItem,
            [`${name}`]: {count: 1}        
        }} else{
          return {
            ...checkoutItem,
            [`${name}`]: {count: checkoutItem[`${name}`].count+1}        
        }}})}
    return (
      <Card id={`item${id}`} name={name} count={count} clickHandler={clickHandler} btnText={'Add to Cart'}/>
    )
  }
  
  export default Product