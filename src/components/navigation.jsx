import Cart from "./Cart";
import { useCountContext, useShowContext } from "../App";

export default function Navigation() {
  const { count } = useCountContext();
  const { isShow, setIsShow } = useShowContext();

  if (count <= 0) {
    setIsShow(false);
  }

  return (
    <nav>
      <div className="left">
        <div className="logo">
          <img src="utils/logo.svg" alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="cart">
        <div className="left">
          <a href="#" onClick={() => setIsShow(!isShow)}>
            <img src="utils/icon-cart.svg" alt="icon-cart" />
          </a>
          {count > 0 && <span>{count}</span>}
          {isShow && <Cart />}
        </div>
        <div className="avatar">
          <a href="#">
            <img src="utils/image-avatar.png" alt="avatar" />
          </a>
        </div>
      </div>
    </nav>
  );
}
