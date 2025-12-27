import React, { useState } from "react";
import SingleMenu from "./SingleMenu";
import Categories from "./Categories";
import MenuData from "./MenuData";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(MenuData);
  const allCategories = [
    "All",
    ...new Set(MenuData.map((item) => item.category)),
  ];

  const filterItems = (category) => {
    if (category === "All") {
      setItems(MenuData);
    } else {
      const newItems = MenuData.filter((items) => items.category === category);
      setItems(newItems);
    }
  };

  return (
    <main className="container-flued bg-gray-100">
      <div className="w-[85%] mx-auto my-5 py-8">
        <h1 className=" text-center text-5xl"> Our Menu</h1>
        <div className=" w-25  bg-yellow-500 h-1 my-4 mx-auto"></div>
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
    w-full sm:w-1/2
    mx-auto block
    mb-6
    px-4 py-2
    border
    rounded-lg
    focus:outline-none
    focus:ring-2
    focus:ring-yellow-400
  "
        />

        <div className=" my-5  mx-auto">
          <Categories allCategories={allCategories} filterItems={filterItems} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {items.map((items, index) => {
            return <SingleMenu {...items} key={items.id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Menu;
