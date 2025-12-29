import React, { useState } from "react";
import DataTabs from "./DataTabs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Tabs = () => {
  const [data] = useState(DataTabs);
  const [value, setValue] = useState(0);

  const { role, company, date, duties } = data[value];

  return (
    <section className="bg-gray-50 py-16">
      <div className="w-[85%] max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4 flex md:flex-col gap-3   md:pl-4">
            {data.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`text-left cursor-pointer px-4 py-2 rounded-md transition-all duration-300
                  ${
                    index === value
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-cyan-100 hover:text-cyan-600"
                  }`}
              >
                {item.company}
              </button>
            ))}
          </div>

          <div className="md:w-3/4 bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{role}</h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-cyan-600 font-semibold">{company}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500">{date}</span>
            </div>

            <div className="space-y-4">
              {duties.map((para, index) => (
                <div key={index} className="flex items-start gap-3">
                  <MdOutlineKeyboardDoubleArrowRight className="text-cyan-500 text-lg mt-1" />
                  <p className="text-gray-700 leading-relaxed">{para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
