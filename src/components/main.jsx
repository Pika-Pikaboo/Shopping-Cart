import { useState } from "react";
import { images } from "./database.js";
import { useCountContext, useShowContext } from "../App.jsx";

export default function Main() {
  const [currentImage, setCurrentImage] = useState({});
  const { count, setCount } = useCountContext();
  const { isShow, setIsShow } = useShowContext();
  const [showCart, setShowCart] = useState(false);

  function handlePurchase() {
    if (!isShow) {
      setIsShow(true);
    }
  }

  return (
    <div className="main-container">
      <div className="left-section">
        <div className="preview">
          <img
            src={
              Object.values(currentImage).length === 0
                ? images[0].url
                : currentImage.url
            }
            alt={
              Object.values(currentImage).length === 0
                ? images[0].title
                : currentImage.title
            }
          />
        </div>
        <div className="thumbnails">
          {images.map((image) => (
            <div
              className={
                currentImage.url === image.url
                  ? "thumbnail active"
                  : "thumbnail"
              }
              key={image.id}
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                onClick={() => {
                  setCurrentImage(image);
                }}
                className={currentImage.url === image.url ? "active" : ""}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-tag">
          <div className="new">
            <p>$125.00</p>
            <div className="discount">50%</div>
          </div>
          <div className="old">
            <s>$250.00</s>
          </div>
        </div>
        <div className="add-cart">
          <div className="quantity">
            <button
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              onClick={() => {
                count <= 0 ? setCount(0) : setCount(count - 1);
              }}
            >
              <img src="utils/icon-minus.svg" alt="minus" />
            </button>
            <button style={{ borderRadius: 0 }}>{count}</button>
            <button
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              onClick={() => setCount(count + 1)}
            >
              <img src="utils/icon-plus.svg" alt="plus" />
            </button>
          </div>
          <button
            onClick={handlePurchase}
            className={count === 0 ? "opaque" : ""}
          >
            <img
              src="utils/icon-cart.svg"
              alt="cart"
              style={{ color: "white" }}
            />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
