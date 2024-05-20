import instance from ".";

const gettAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

export default gettAllPets;
