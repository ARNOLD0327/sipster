import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import "./orders.css";
import Gif from "../assets/gif.gif";
import { useNavigate } from "react-router-dom";
function Orders() {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {cart.length === 0 ? (
        <>
          <h2 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
            Your cart is empty!
          </h2>
          <img src={Gif} alt="Empty Cart" className="empty-cart-gif" />
        </>
      ) : (
        <div className="order-page">
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p> single Price: ${item.price}</p>
              <p>Quantity: {item.qty}</p>
              <p>Total Price: ${item.price * item.qty}</p>
              <div className="order-item-buttons">
                <button onClick={() => removeItem(item)}>-</button>
                <span>Add Quantity</span>
                <button onClick={() => addItem(item)}>+</button>
              </div>
            </div>
          ))}
          <div className="view-menu-button">
            <button onClick={() => navigate("/sip-menu")}>View menu</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Orders;
