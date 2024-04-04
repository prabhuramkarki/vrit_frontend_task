// import React from "react";
import image from "./assets/image.png";
import Checkbox from "./assets/Checkbox.png";

function Container() {
  return (
    <>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div className="max-w-lg mx-auto">
            <p className="flex items-center mb-4">
              <img src={Checkbox} alt="checkbox" className="w-4 h-4 mr-2" />
              Your Trusted Career Partner
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Unlock Your Dream <span className="text-blue-500">Career</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Our platform is dedicated to empowering individuals, connecting
              talent with the right opportunities, and fostering professional
              growth.
            </p>
            <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-between mb-6 w-auto">
              <input
                className="cont-input mb-2 md:mr-2 focus:outline-none focus:ring-0"
                type="text"
                placeholder="Job title, Keyword..."
              />
              <input
                className="cont-input mb-2 md:mr-2 focus:outline-none focus:ring-0"
                type="text"
                placeholder="Enter Location"
              />

              <button className="bg-blue-500 text-white border-none py-4 px-2 w-2/4 rounded-md cursor-pointer ml-2">
                Search
                </button>
            </div>

            <p className="text-gray-600">
              Popular Searches: Designer, Developer, Programmer, Architect
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={image} alt="Image" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default Container;
