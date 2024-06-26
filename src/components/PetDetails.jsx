import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PetDetails = ({ pet, handleRemovePet }) => {
  if (!pet) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }
  return (
    <>
      <h1>{pet.name}</h1>
      <h2>Breed: {pet.breed}</h2>
      <h2>
        Age: {pet.age} year{pet.age > 1 ? "s" : ""}
      </h2>
      <Link to={`/pets/${pet._id}/edit`}>
        <button>Update {pet.name}!</button>
      </Link>
      <button onClick={() => handleRemovePet(pet._id)}>Remove Pet</button>
    </>
  );
};
export default PetDetails;
