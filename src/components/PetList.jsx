import { Link, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const PetList = ({ pets, updateSelected }) => {
    // const {petId} = useParams();

  return (
    <>
      <h1>Pets List</h1>
      <ul>
        {pets?.length ? (
          pets?.map((pet) => (
            <Link key={pet._id} to={`/pets/${pet._id}`} onClick={() => updateSelected(pet)}>
              <li>{pet.name}</li>
            </Link>
          ))
        ) : (
          <h2>no pets!</h2>
        )}
      </ul>
    </>
  );
};
export default PetList;
