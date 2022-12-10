export default function reducer(state, action) {
    switch (action.type) {
      case 'FIRST_ADD_TO_CART': {
        return  {
          ...state,
          [`checkouts`]: {
            ...state.checkouts,
            [`${action.payload.name}`]:{count: state.products[`${action.payload.name}`].count} 
          }
        } ;
      }
      case 'ADD_TO_CART': {
        if(state.checkouts[`${action.payload.name}`].count >= 9){
          return {
            ...state,
            [`checkouts`]: {
              ...state.checkouts,
              [`${action.payload.name}`]: {count: 9}
          }
        }};
        return {
            ...state,
          [`checkouts`]: {
            ...state.checkouts,
            [`${action.payload.name}`]:{count: state.products[`${action.payload.name}`].count + state.checkouts[`${action.payload.name}`].count} 
          }      
        }
      }
      case 'DELETE_CHECKOUT_ITEM':{
        const newState ={...state};
        delete newState.checkouts[`${action.payload.name}`];
        return newState
      }
      case 'ADD_QUANTITY':{
        switch(action.payload.modelType){
          case 'store' : {
            if(state.products[`${action.payload.name}`].count >= 9){
              return {
                  ...state,
                  [`products`]: {
                    ...state.products,
                    [`${action.payload.name}`]: {count: 9}
                }
              }
            } else {
              return {
                ...state,
                [`products`]: {
                  ...state.products,
                  [`${action.payload.name}`]: {count: state.products[`${action.payload.name}`].count+1}
              }
            }
          }
          }
          case 'checkout' : {
            console.log(action.payload)
            console.log(state)
            if(state.checkouts[`${action.payload.name}`].count >= 9){
              return {
                ...state,
                [`checkouts`]: {
                  ...state.checkouts,
                  [`${action.payload.name}`]: {count: 9}
              }
            };
            } else {
              return {
                ...state,
                [`checkouts`]: {
                  ...state.checkouts,
                  [`${action.payload.name}`]: {count: state.checkouts[`${action.payload.name}`].count+1}
                }
              }
            }
          }
        }
      }
      case 'REDUCE_QUANTITY':{
        switch(action.payload.modelType){
          case 'store' : {
            if(state.products[`${action.payload.name}`].count <= 1){
              return {
                  ...state,
                  [`products`]: {
                    ...state.products,
                    [`${action.payload.name}`]: {count: 1}
                }
              }
            } else {
              return {
                ...state,
                [`products`]: {
                  ...state.products,
                  [`${action.payload.name}`]: {count: state.products[`${action.payload.name}`].count-1}
                }
              }
            }
          }
          case 'checkout' : {
            console.log(action.payload)
            console.log(state)
            if(state.checkouts[`${action.payload.name}`].count <= 1){
              return {
                ...state,
                [`checkouts`]: {
                  ...state.checkouts,
                  [`${action.payload.name}`]: {count: 1}
                }
              };
            } else {
              return {
                ...state,
                [`checkouts`]: {
                  ...state.checkout,
                  [`${action.payload.name}`]: {count: state.checkouts[`${action.payload.name}`].count-1}
                }
              }
            }
          }
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }