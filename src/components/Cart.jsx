import { useState } from "react";
import { useCountContext } from "../App";

export default function Cart() {
  const { count, setCount } = useCountContext();
  const [showCart, setShowCart] = useState(false);
  let totalCost = 125.0 * count;

  function handleDelete() {
    setCount(count - 1);
  }

  return (
    <div className="cart-container">
      <div className="cart-header">Cart</div>
      <div className="purchased-items">
        {count > 0 || showCart === true ? (
          <>
            <div className="cart-list">
              <img
                src="utils/image-product-1-thumbnail.jpg"
                alt="product-1"
                onClick={() => setShowCart(!showCart)}
              />
              <p>
                Fall Limited Edition Sneakers <br /> $125.00 x {count}{" "}
                <b>${totalCost}</b>
              </p>
              <a href="#" onClick={handleDelete}>
                <img
                  src="utils/icon-delete.svg"
                  alt="delete"
                  className="delete"
                />
              </a>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
        <button>Checkout</button>
      </div>
    </div>
  );
}
