import items from '../mockList/mockList.json'

export default function initialState() {
    const state = {
      products : items,
      checkouts : {},
    }
    const productNames = Object.keys(state.products)
    productNames.map((productName) => {
      state.products[`${productName}`].count = 1;
      state.checkouts[`${productName}`] = {count: 0}
    })
    return state
  }