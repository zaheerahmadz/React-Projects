import React from "react";
import faqs from "./Faqs";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-cyan-500">
      <div className=" w-[60%] mt-5  rounded-md bg-gray-100">
        <h1 className="font-semibold capitalize text-6xl  text-center my-5 text-gray-800 tracking-widest">
          FAQS
        </h1>
        {faqs.map((item, index) => {
          return <SingleQuestion {...item} key={index} />;
        })}
      </div>
    </main>
  );
};

export default Questions;
