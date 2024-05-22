import React, { useState } from "react";
import "./AddPropertyStyles.scss";

const URL = "http://localhost:5500"; //nodejs server;
// const URL = "http://localhost:8080"; //springboot server
// const URL = "https://fox-house-backend.onrender.com";

const AddProperty = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    sqFt: "",
    area: "",
    bedrooms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/feed/item`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add property");
      }
      const data = await response.json();
      console.log("Property added:", data);
      // Close the modal or handle success as needed
      handleClose();
    } catch (error) {
      console.error("Error adding property:", error.message);
    }
  };

  return (
    <div className={`add-property__modal ${show ? "show" : ""}`}>
      <div className="add-property__modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <h2>Add Property</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Square Feet:
            <input
              type="number"
              name="sqFt"
              value={formData.sqFt}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Area:
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bedrooms:
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
