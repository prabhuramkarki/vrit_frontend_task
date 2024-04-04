// import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-384px h-auto px-0 pt-24 gap-16 border border-gray-300 rounded-tr-lg rounded-br-lg opacity-0">
      {children}
    </div>
  );
};

export default Card;
