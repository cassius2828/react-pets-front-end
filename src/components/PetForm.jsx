/* eslint-disable react/prop-types */
import { useState } from "react";

const PetForm = ({ handleAddPet }) => {
  // formData state to control the form
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    handleAddPet(formData);
    setFormData({
      name: "",
      age: "",
      breed: "",
    });
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};
export default PetForm;
