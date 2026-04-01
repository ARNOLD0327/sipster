import { Link } from "react-router-dom";
import logo from "../assets/new.png";
import "./Navbar.css";
function Navbar() {
    return (
        <>
            <nav className="navbar">
               <div className="logo">
                <img src={logo} alt="Sipster Logo" />
                <h1>Sipster</h1>
               </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sip-menu">Sip Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;