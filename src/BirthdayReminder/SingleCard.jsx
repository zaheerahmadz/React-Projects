import React from "react";

const SingleCard = ({ firstName, age, img, remove }) => {
  return (
    <>
      <div className="container hover:bg-gray-100 hover:scale-102 transition-all duration-200 shadow-lg rounded-md cursor-pointer items-center flex justify-between px-5 p-5 border border-bottom border-gray-300">
        <div className="left flex gap-5 justify-center items-center">
          <img
            src={img}
            className=" h-17.5 border-3 hover:border-red-500  w-17.5 rounded-full object-cover hover:scale-120 transition-all duration-200 cursor-pointer"
            alt=""
          />
          <div className="flex flex-col items-start">
            <h3 className="text-black font-bold text-2xl">{firstName}</h3>
            <p className="text-gray-500 font-semibold">{age} Years</p>
          </div>
        </div>
        <div className="right">
          <button
            onClick={remove}
            type="button"
            className="px-4 py-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-md "
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
