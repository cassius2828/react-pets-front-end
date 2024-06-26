// const BASE_URL = 'http://localhost:3000/pets'
const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL + "/pets";

export const index = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    if (response.ok) return data;
    throw new Error(data.error);
  } catch (err) {
    console.error(err);
    console.log(`Error occured fetching pets data | se`);
  }
};

export const create = async (formData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) return data;
    throw new Error(data.error);
  } catch (err) {
    console.error(err);
    console.log(`Error occured creating new pet | se`);
  }
};

export const update = async (formData, id) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  try {
    const response = await fetch(BASE_URL + `/${id}`, options);
    if (response.ok) return response.json();
  } catch (err) {
    console.error(err);
    console.log(`Error occured updating the pet | _id: ${id}`);
  }
};

export const remove = async (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(BASE_URL + `/${id}`, options);
    const data = response.json();
    if (response.ok) return data;
    throw new Error(data.error);
  } catch (err) {
    console.error(err);
    console.log(`Error occured removing the pet | _id: ${id}`);
  }
};
