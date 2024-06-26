/* eslint-disable react/prop-types */
import { useState } from "react";
import { update } from "../services/petService";
import { useNavigate } from "react-router-dom";

const UpdatePetForm = ({ pet, handleEditPet }) => {
  // formData state to control the form
  const [formData, setFormData] = useState({
    name: pet.name,
    age: pet.age,
    breed: pet.breed,
  });
  const navigate = useNavigate();

  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  async function handleSubmit(e) {
    e.preventDefault();

    await handleEditPet(formData, pet._id);

    setFormData({
      name: "",
      age: "",
      breed: "",
    });
    navigate(`/`);
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
        <button onClick={handleSubmit} type="submit">
          Confirm Changes to {pet.name}
        </button>
      </form>
    </div>
  );
};
export default UpdatePetForm;
