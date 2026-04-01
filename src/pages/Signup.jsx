import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try{
      const res = await axios.post(
      "http://localhost:3000/api/users/signup",
      formData
    );
    alert("Signup successful! Please login.");
    } catch (err) {
      console.error("Error signing up:", err);
      alert("Error signing up. Please try again.");

    }
    
    
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="title">create account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
