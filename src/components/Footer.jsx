import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Sipster</h2>
          <p>
            Freshly brewed coffee made with love and quality ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sipmenu">SipMenu</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: arnoldjohnson@example.com</p>
          <p>Phone: +91 7695858276</p>
          <p>Location: chennai</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CoffeeHouse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
