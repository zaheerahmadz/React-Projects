import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";

const SingleQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <article className="p-5 ">
      <section className=" p-5 shadow-lg w-[80%] mx-auto rounded-md bg-gray-50">
        <header className="flex justify-between items-center  transition-all duration-300">
          <h2 className=" sm:text-[20px] md:text-[20px] font-semibold capitalize lg:text-2xl text-gray-800 tracking-widest">
            {title}
          </h2>
          <button onClick={() => setShow(!show)}>
            {show ? (
              <HiOutlineMinus
                size={30}
                className=" cursor-pointer  text-cyan-500"
              />
            ) : (
              <HiOutlinePlus
                size={30}
                className=" cursor-pointer  text-cyan-500"
              />
            )}
          </button>
        </header>
        {show && <p className="text-gray-500 mt-5 tracking-wide">{info}</p>}
      </section>
    </article>
  );
};

export default SingleQuestion;
