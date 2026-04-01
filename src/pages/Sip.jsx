import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "./sip.css";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import { motion } from "framer-motion";
function Sip() {
  const [sips, setSips] = useState([]);
  const { addItem, removeItem } = useContext(CartContext);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/coffees/store");
        setSips(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCoffee();
  }, []);
  return (
    <>
      <Navbar />
      <div className="sip-menu-page">
        <motion.div
          className="order-hero"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Brewed to Perfection </h1>
          <p>
            Experience the rich aroma and bold flavors of our handcrafted
            coffee. Every cup is made with carefully selected beans and love.
          </p>
        </motion.div>
        <div className="sipitem">
          {sips.map((sip) => (
            <motion.div
              key={sip._id}
              className="sip-item"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <img src={sip.image} alt={sip.title} />
              <h3>{sip.title}</h3>
              <p>{sip.discription}</p>
              <p>Ingredients: {sip.ingredients.join(", ")}</p>
              <p id="price">Price: ${sip.price}</p>
              <div className="addingtocart">
                <button
                  onClick={() => {
                    removeItem(sip);
                  }}
                >
                  -
                </button>
                <p>order now</p>
                <button
                  onClick={() => {
                    addItem(sip);
                  }}
                >
                  +
                </button>
              </div>
              <p>Qty:</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Sip;
