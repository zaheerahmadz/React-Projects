import React, { useState } from "react";
import { PData } from "./PData";
import { MdFormatQuote } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SingleReview = () => {
  const [index, setIndex] = useState(0);
  const { img, firstName, job, Text, age } = PData[index];
  const Left = () => {
    if (index === 0) {
      setIndex(PData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const Right = () => {
    if (index === PData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const RandomPerson = () => {
    let RandomNumber = Math.floor(Math.random() * PData.length);

    setIndex(RandomNumber);
  };
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <div className="relative w-fit mx-auto">
            <img
              src={img}
              className=" h-30.5 border-2 hover:border-blue-500 mx-auto  w-30.5 rounded-full object-cover cursor-pointer"
              alt={firstName}
            />
            <MdFormatQuote
              className=" absolute top-0 right-20 bg-blue-500 text-white rounded-full p-2"
              size={35}
            />
          </div>
          <h2 className="text-center mt-3 py-2 text-2xl  tracking-wide">
            {firstName}
          </h2>
          <p className="text-center uppercase text-sm text-blue-500 font-semibold">
            {job}
          </p>
          <p className="text-center py-2 text-gray-500">{Text}</p>
          <div className="flex justify-center gap-2 cursor-pointer my-2">
            <FaChevronLeft onClick={Left} className="text-blue-500" size={20} />
            <FaChevronRight
              onClick={Right}
              className="text-blue-500"
              size={20}
            />
          </div>
          <button
            onClick={RandomPerson}
            className="block hover:bg-blue-500 hover:text-white mx-auto bg-gray-200 text-blue-400 px-3 py-1   rounded-md my-3 cursor-pointer"
          >
            Random Person
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleReview;
