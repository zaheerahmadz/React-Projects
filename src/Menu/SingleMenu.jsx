import React from "react";

const SingleMenu = ({ title, category, price, image, dec }) => {
  return (
    <section className=" bg-white shadow-lg">
      <div className="card">
        <img
          src={image}
          className="w-full h-68 object-cover rounded-md"
          alt={title}
        />
      </div>
      <div className="flex justify-between items-center p-5">
        <h2 className="text-2xl text-gray-800">{title}</h2>
        <p className=" bg-yellow-600 px-3 cursor-pointer text-white">
          ${price}
        </p>
      </div>
      <p className="p-5 text-gray-500">{dec}</p>
    </section>
  );
};

export default SingleMenu;
