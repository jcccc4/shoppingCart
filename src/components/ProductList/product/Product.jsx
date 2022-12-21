import { useContext } from 'react';
import { ButtonContext } from '../../../contexts/ButtonContext'
import Card from '../../card/Card'

export default function Product({ name, count, btnText, modelType, clickHandler}) {
  const {addProductHandler, deductProductHandler} = useContext(ButtonContext);
    return (<>
      {count !== 0 && <Card 
        name={name} 
        count={count} 
        clickHandler={()=>clickHandler(name)} 
        btnText={btnText} 
        addProductHandler={()=>addProductHandler(name, modelType)} 
        deductProductHandler={()=>deductProductHandler(name, modelType)}/>}
      </>
    )
  }
  