import React, { useState } from "react";
import loremData from "./loremData";

const Lorem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlerSub = (e) => {
    e.preventDefault();

    let amount = count;
    if (amount <= 0) amount = 1;
    if (amount > loremData.length) amount = loremData.length;

    setText(loremData.slice(0, amount));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md flex flex-col gap-6">
        <h1 className="uppercase text-3xl font-semibold text-center text-gray-800">
          tired of boring lorem ipsum?
        </h1>

        <form
          onSubmit={handlerSub}
          className="flex items-center justify-center gap-3"
        >
          <label htmlFor="amount" className="capitalize font-medium">
            paragraphs:
          </label>

          <input
            className="bg-gray-100 py-1 w-20 rounded-md text-center outline-none"
            type="number"
            id="amount"
            min="1"
            max={loremData.length}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition"
          >
            Generate
          </button>
        </form>

        <article className="flex flex-col gap-4 text-gray-700 leading-relaxed">
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Lorem;
