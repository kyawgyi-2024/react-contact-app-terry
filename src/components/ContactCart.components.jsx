import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";
import { deleteContact } from "../service/contact.service";

const ContactCartComponents = ({ data,handleDelete }) => {
  const nav = useNavigate();
  const handleDirect = () => {
    nav(`/home/contact/ ${data.id}`);
  };

  const handleEdit = () => {
    // console.log("ID is here", data.id);
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };

  
  return (
    <div className=" w-2/4 h-auto border flex justify-between items-center p-3 ">
      <button onClick={handleDirect} className=" flex-1">
        <div>
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </button>
      <div className=" space-x-3">
        <button onClick={handleEdit}>
          <CiEdit />
        </button>
        <button onClick={handleDelete.bind(this,data.id)}>
          <CiTrash />
        </button>
      </div>
    </div>
  );
};

export default ContactCartComponents;
