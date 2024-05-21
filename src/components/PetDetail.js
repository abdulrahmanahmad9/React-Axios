import React, { useState } from "react";
import petsData from "../petsData";
import { useParams } from "react-router";
import { getOnePet } from "../api/Pets";
// import { deleteOnePet } from "../api/Pets";

const PetDetail = () => {
  const { petId } = useParams();
  const [first, setfirst] = useState();
  // const [deletepet, setdeletepet] = useState();

  const pet = petsData.find((pet) => {
    return pet.id == petId;
  });
  if (!pet) {
    return <h1> not found</h1>;
  }

  const fetchPet = async () => {
    const response = await getOnePet();
    setfirst(response);
  };

  // const deletePet = async () => {
  //   const res = await deleteOnePet();
  //   setdeletepet(res);
  // };

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <button onClick={fetchPet}> fetchPet </button>
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
            // onClick={deletePet}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
