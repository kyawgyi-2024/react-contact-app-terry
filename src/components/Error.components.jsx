import React from "react";

const ErrorComponents = ({children}) => {
  return (
    <div>
      <h1 className=" bg-red-500 text-center shadow-lg">{children}
        <span className=" text-white material-symbols-outlined">Warning</span>
      </h1>
    </div>
  );
};

export default ErrorComponents;
