import CartList from "../../components/cartList/CartList"


export default function Checkout({checkoutList}) {

    return (
      <div className="checkout">
        <div>You are at the Checkout Page.</div>
        <CartList checkoutList={checkoutList} />
      </div>
    )
  }