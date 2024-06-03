import React, { useState, useEffect } from "react";
import Camera from "@/assets/Icons/camera.png";
import "./AddPropertyStyles.scss";

// const URL = "http://localhost:5500"; //nodejs server;
// const URL = "http://localhost:8080"; //springboot server
const URL = "https://fox-house-backend.onrender.com";

const AddProperty = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    sqFt: "",
    area: "",
    bedrooms: "",
    latitude: "37.97",
    longitude: "23.71",
    photo: "",
  });
  //   const [photoLink, setPhotoLink] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFormData({ ...formData, photoLink: base64String });
        setPhotoPreview(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, photoLink: "" });
      setPhotoPreview(null);
    }
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
      const result = await response.json();
      console.log("Property added:", result);
      handleClose();
    } catch (error) {
      console.error("Error adding property:", error.message);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

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
          <label>
            Latitude:
            <input
              type="number"
              name="latitude"
              disabled
              value={formData.latitude}
              onChange={handleChange}
            />
          </label>
          <label>
            Longitude:
            <input
              type="number"
              name="longitude"
              disabled
              value={formData.longitude}
              onChange={handleChange}
            />
          </label>
          <div className="add-property__upload">
            <label
              htmlFor="photo-upload"
              className="add-property__upload-label"
            >
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="PhotoPreview"
                  className="add-property__photo-thumbnail"
                />
              ) : (
                <img
                  src={Camera}
                  alt="upload"
                  className="add-property__upload-icon"
                />
              )}
              <input
                type="file"
                id="photo-upload"
                name="photoLink"
                accept="image/jpeg, image/png"
                onChange={handlePhotoChange}
                className="add-property__upload-input"
              />
            </label>
          </div>
          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
