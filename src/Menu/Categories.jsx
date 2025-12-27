import React from "react";

const Categories = ({ filterItems, allCategories }) => {
  return (
    <section
      className=" flex
      py-8
    flex-wrap
    justify-center
    gap-3
    sm:gap-4
    md:gap-5
    lg:gap-6"
    >
      {allCategories.map((category, index) => (
        <button
          onClick={() => filterItems(category)}
          className=" px-5 py-2  bg-yellow-500 active:scale-95
  text-white
  font-medium
  rounded-lg
  border border-yellow-200
  transition
  duration-300
  hover:bg-yellow-100
  hover:text-yellow-600 cursor-pointer"
          key={index}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default Categories;
