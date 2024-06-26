// react
import { useEffect, useState } from "react";

// 3rd party
import { Route, Routes, useNavigate } from "react-router-dom";

// services
import { create, index, remove, update } from "./services/petService";

// components
import PetList from "./components/PetList";
import PetDetails from "./components/PetDetails";
import UpdatePetForm from "./components/UpdatePet";

/////////////////
// Main Application Component
////////////////
const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [error, setError] = useState("");
const navigate = useNavigate()
  ///////////////////////
  // Update Selected Pet
  ///////////////////////
  function updateSelected(pet) {
    console.log(pet, " <-- selected pet");
    setSelectedPet(pet);
  }

  /////////////////////
  // Handle Add Pet
  /////////////////////
  async function handleAddPet(formData) {
    try {
      const data = await create(formData);
      console.log(data, " <-- new pet data from create route in server");
    } catch (err) {
      console.error(err);
    }
  }
  async function handleEditPet(formData, id) {
    const editedPet = await update(formData, id);
    const updatedPetsArray = pets.map((pet) =>
      editedPet._id === pet._id ? editedPet : pet
    );
    setPets(updatedPetsArray);
  }

  async function handleRemovePet(id) {
    const removedPet = await remove(id);
    const updatedPetsArray = pets.filter(pet => id !== pet._id)
    console.log(removedPet)
    console.log(updatedPetsArray)
    setPets(updatedPetsArray);
    navigate(`/`);

  }
  //////////////////////
  // Fetch Pets on Load
  //////////////////////
  useEffect(() => {
    try {
      const fetchPets = async () => {
        let data = await index();
        setPets(data);
        setError("");
      };
      fetchPets();
    } catch (err) {
      console.error(err);
      setError("Sorry the pets could not be found, try again later");
    }
  }, []);

  ////////////////////////////
  // Render Application Routes
  ////////////////////////////
  return (
    <>
      {/* <PetForm handleAddPet={handleAddPet} /> */}
      <Routes>
        <Route
          path="/"
          element={<PetList pets={pets} updateSelected={updateSelected} />}
        />
        <Route
          path="/pets/:petId/edit"
          element={
            <UpdatePetForm handleEditPet={handleEditPet} pet={selectedPet} />
          }
        />
        <Route path="/pets/:petId" element={<PetDetails handleRemovePet={handleRemovePet} pet={selectedPet} />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
