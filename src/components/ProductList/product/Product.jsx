import Card from '../../card/Card'


export default function Product({ name, count, clickHandler, btnText, addItemHandler, deductItemHandler, modelType}) {

    return (<>
      {count !== 0 && <Card name={name} count={count} clickHandler={()=>clickHandler(name)} btnText={btnText} addItemHandler={()=>addItemHandler(name, modelType)} deductItemHandler={()=>deductItemHandler(name, modelType)}/>}
      </>
    )
  }
  