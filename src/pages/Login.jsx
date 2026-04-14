import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       const res= await axios.post("https://sipster-server-1.onrender.com/api/users/login",formData);
       if(res.status==200)
       {
        console.log("Login successful");
        navigate("/home");
       }
    }
    catch(err){
        console.log("error", err)
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" >Login</button>

        <p className="text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
