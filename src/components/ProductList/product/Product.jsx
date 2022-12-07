import Card from '../../card/Card'


export default function Product({id, name, count, clickHandler, btnText}) {
    
    return (
      <Card id={`item${id}`} name={name} count={count} clickHandler={()=>clickHandler(name)} btnText={btnText}/>
    )
  }
  