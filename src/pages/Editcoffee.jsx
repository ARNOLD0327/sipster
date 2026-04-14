import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import"./editcoffee.css";

function EditCoffee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState({
    title: "",
    discription: "",
    ingredients: "",
    price: "",
    image: "",
    type: "",
  });

  useEffect(() => {
    axios.get(`https://sipster-server-1.onrender.com/store/${id}`)
      .then(res => {
        setCoffee({
          ...res.data,
          ingredients: res.data.ingredients.join(",")
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setCoffee({
      ...coffee,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...coffee,
      ingredients: coffee.ingredients.split(","),
    };

    await axios.put(`https://sipster-server-1.onrender.com/store/${id}`, updatedData);
    navigate("/store");
  };

  return (
    <div className="form-container">
      <h2>Edit Coffee</h2>
      <form onSubmit={handleUpdate}>
        <input name="title" value={coffee.title} onChange={handleChange} placeholder="title" />
        <textarea name="discription" value={coffee.discription} onChange={handleChange} placeholder="description" />
        <input name="ingredients" value={coffee.ingredients} onChange={handleChange} placeholder="ingredients (comma separated)" />
        <input type="number" name="price" value={coffee.price} onChange={handleChange} placeholder="price" />
        <input name="image" value={coffee.image} onChange={handleChange} placeholder="image URL" />
        <input name="type" value={coffee.type} onChange={handleChange} placeholder="type (hot/cold)" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditCoffee;
