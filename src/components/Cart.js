import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearItem = ()=>{
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">My Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 text-sm font-bold rounded-md bg-red-400 text-white"
          onClick={handleClearItem}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (<h1>Cart is Empty! Please add items to your Cart.</h1>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
