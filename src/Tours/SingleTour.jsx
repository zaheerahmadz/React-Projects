import React, { useState } from "react";

const SingleTour = ({ id, img, title, info, price, remove }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="my-5 ">
      <div className=" card  rounded-md shadow-2xl relative  ">
        <p className=" absolute top-0 right-0 bg-green-400 text-white font-semibold px-3 rounded-md cursor-pointer">
          ${price}
        </p>
        <img className="w-full h-68 object-cover rounded-md" src={img} alt="" />
        <div className="p-5 ">
          <h2 className="tracking-wide text-xl text-center font-semibold py-3 text-dark">
            {title}
          </h2>
          <p className=" text-center text-gray-600">
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              onClick={() => setReadMore(!readMore)}
              className="text-green-500 cursor-pointer"
            >
              {readMore ? "Show less" : "Read More.."}
            </button>
          </p>

          <button
            onClick={() => remove(id)}
            className=" my-2 mx-auto transition-all duration-100 active:bg-green-400  text-green-400 border border-green-400 hover:bg-green-400 hover:text-white py-1 px-3 w-full rounded-md cursor-pointer"
          >
            Not Interested
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleTour;
