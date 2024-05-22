import instance from ".";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getOnePet = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const createOnePet = async (name, type, image, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });
  return res.data;
};

const deletePet = async (petId) => {
  const res = await instance.delete(`/pets/${petId}`);

  return res.data;
};

export { getAllPets, getOnePet, createOnePet, deletePet };
