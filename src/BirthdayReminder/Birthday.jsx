import React, { useState } from "react";
import { data } from "./data";
import SingleCard from "./SingleCard";
const Birthday = () => {
  const [mydata, setMyData] = useState(data);
  const handlerFun = () => {
    if (mydata.length === 0) {
      setMyData(data);
    } else {
      setMyData([]);
    }
  };
  const RemoveSingle = (id) => {
    const newData = mydata.filter((data) => data.id !== id);
    setMyData(newData);
  };
  return (
    <>
      <div className="container-flued flex flex-col mx-auto justify-center bg-gray-100">
        <h1 className=" cursor-pointer text-center text-5xl font-bold text-green-500 mt-5 p-2">
          {mydata.length} Birthday Today
        </h1>
        <div className="w-[70%] mx-auto bg-gray-200 rounded-lg my-5">
          {mydata.map((item, index) => {
            return (
              <SingleCard
                key={index}
                {...item}
                remove={() => RemoveSingle(item.id)}
              />
            );
          })}
          <button
            onClick={handlerFun}
            className={` text-white rounded w-full cursor-pointer py-2  ${
              mydata.length == 0 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {mydata.length === 0 ? "Refresh All" : "Clear All"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Birthday;
