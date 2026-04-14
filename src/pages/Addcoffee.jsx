import { useState } from "react";
import axios from "axios";
import "./addcoffee.css";

function AddCoffee() {
  const [coffee, setCoffee] = useState({
    title: "",
    discription: "",
    ingredients: "",
    price: "",
    image: "",
    type: ""
  });

  const handleChange = (e) => {
    setCoffee({
      ...coffee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedData = {
        ...coffee,
        ingredients: coffee.ingredients.split(","), // convert string to array
      };

      await axios.post("https://sipster-server-1.onrender.com/store", formattedData);
      alert("Coffee added successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Coffee</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <textarea
          name="discription"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <select name="type" onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="hot">Hot</option>
          <option value="cold">Cold</option>
        </select>

        <button type="submit">Add Coffee</button>
      </form>
    </div>
  );
}

export default AddCoffee;
