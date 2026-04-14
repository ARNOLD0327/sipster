import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./view.css";

function Viewcoffee() {
  const [coffees, setCoffees] = useState([]);
  const navigate = useNavigate();

  const fetchCoffees = async () => {
    const res = await axios.get("https://sipster-server-1.onrender.com/store");
    setCoffees(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCoffees();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`https://sipster-server-1.onrender.com/store/${id}`);
    fetchCoffees(); // refresh list
  };

  return (
    <div className="store-container">
      <h2>Our Coffee Menu ☕</h2>

      <div className="coffee-grid">
        {coffees.map((coffee) => (
          <div className="coffee-card" key={coffee._id}>
            <img src={coffee.image} alt={coffee.title} />
            <h3>{coffee.title}</h3>
            <p>{coffee.discription}</p>
            <h4>₹ {coffee.price}</h4>

            <div className="btn-group">
              <button onClick={() => navigate(`/edit/${coffee._id}`)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(coffee._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewcoffee;
