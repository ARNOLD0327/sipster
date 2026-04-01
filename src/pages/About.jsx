import Navbar from "../components/Navbar";
import "./about.css";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Teamimage from "../assets/team.jpg";
function About(){
    return(
        <>
        <Navbar />
        <div className="about-page">
          <div className="about-hero">
            <motion.div className="about-hero-text" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <h1>Our Story</h1>
              <p>
                At Sipster, we are passionate about crafting the perfect cup of coffee and creating a welcoming space for our customers. Our journey began with a simple love for coffee and a desire to share that love with others. We source our beans from sustainable farms around the world, ensuring that every cup we serve is not only delicious but also ethically produced. Our team of skilled baristas is dedicated to providing exceptional service and creating a memorable experience for every customer who walks through our doors.
              </p>
            </motion.div>
            <div className="about-hero-image">
              <img src={Teamimage} alt="Team" />
            </div>
          </div>
        </div>            
        
    <Footer />
        </>
    )
}
export default About;



