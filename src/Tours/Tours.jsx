import React, { useState } from "react";
import dataTours from "./dataTours";
import SingleTour from "./SingleTour";
document.title = "Tours";
const Tours = () => {
  const [Tour, setTour] = useState(dataTours);

  const RefreshAll = () => {
    setTour(dataTours);
  };
  const RemoveCard = (id) => {
    const newTour = Tour.filter((Tour) => Tour.id !== id);
    setTour(newTour);
    if (Tour.length === 0) {
    }
  };
  return (
    <main>
      <div className="container my-5 mx-auto">
        <h1 className="text-center text-4xl font-semibold">
          {Tour.length === 0 ? "No Tours Left" : "Our Tours"}
        </h1>
        <div className=" bg-green-400 mx-auto h-1 my-2 w-25"></div>

        <button
          onClick={RefreshAll}
          className={`mx-auto bg-green-400 cursor-pointer ${
            Tour.length === 0 ? " block" : "hidden"
          } my-5  text-white px-3 py-1 rounded-md`}
        >
          Refresh All
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Tour.map((item, index) => {
            return <SingleTour {...item} remove={RemoveCard} key={index} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Tours;
