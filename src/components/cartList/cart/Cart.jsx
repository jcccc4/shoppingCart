import Card from '../../card/Card'

function Cart({id, name, count}) {
  const clickHandler = ()=>{
    console.log('JKL')  
  }
    return (
      <Card id={`product${id}`} name={name} count={count} clickHandler={clickHandler} btnText={'Delete'}/>
    )
  }
  
  export default Cart