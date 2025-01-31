import React from "react";

const FormComponents = ({ type, name, label, placeholder = "",...rest }) => {
  return (
    <div className=" flex flex-col">
      <label htmlFor={name} className=" text-lg">
        {label}
      </label>
      <input
      {...rest}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className=" px-2 py-3 rounded mt-2 border-2 border-blue-300"
      />
    </div>
  );
};

export default FormComponents;
