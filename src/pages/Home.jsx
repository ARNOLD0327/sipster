import Navbar from "../components/Navbar";
import Hero from "../assets/coffee.png";
import "./home.css";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
function Home() {
  const [signature, setSignature] = useState([]);
  useEffect(() => {
    const fetchSignature = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/coffees/store");
        const data = await res.json();
        setSignature(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSignature();
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        className="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1>Fuel Your Day</h1>
            <h2>Crafted With Passion</h2>
            <p>
              Your ultimate destination for refreshing beverages and delightful
              sips!
            </p>
            <p></p>
            <h3>Free Shiping!</h3>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Explore Menu
            </motion.button>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="steam">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={Hero} alt="Hero Image" />
          </motion.div>
        </div>
      </motion.div>
      <hr />
      <section className="features">
        <motion.div className="feature"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h4>Our selection </h4>
          <h2>Signature Coffee blendes</h2>
          <hr />
          <p>
            Experience our exclusive blend of premium coffee beans, carefully
            roasted to perfection for a rich and satisfying taste.
          </p>
          <h3></h3>
        </motion.div>
        <div className="signature-list">
          {signature.map((item) => {
            if (item.type == "cold") {
              return (
                <motion.div
                  key={item.id}
                  className="signature-item"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.discription}</p>
                  <p>Ingredients: {item.ingredients.join(", ")}</p>
                  <h4>Price: ${item.price}</h4>
                </motion.div>
              );
            }
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
