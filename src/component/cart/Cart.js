import { useSelector } from "react-redux";
import Fooditem from "./Fooditem";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  return (
    <div>
      <span className="text-xl m-6 font-bold">Items {items.length}</span>
      <div className="flex m-10">
        {items.map((elm) => (
          <Fooditem key={elm.id} {...elm} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
