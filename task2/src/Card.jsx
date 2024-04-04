// import React from 'react';
import cplogo from "./assets/cplogo.png";

const Card = () => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
    <div className="flex justify-between items-center p-4">
      <img src= {cplogo} alt="Company Logo" className="h-12 w-12 object-contain" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Apply Now</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold">Job Title</h3>
      <p className="text-gray-600 mb-2">Company Name</p>
      <p className="text-gray-700">Job Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet!</p>
      <p className="text-gray-600 mt-2">Location: City, Country</p>
      <p className="text-gray-600">Salary: $50,000 - $70,000</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v12.132l2.61-2.61a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.61 2.61V3.75A.75.75 0 0110 3zM4.75 0A2.75 2.75 0 002 2.75v16.5a.25.25 0 00.416.197L10 13.86l7.584 6.438a.25.25 0 00.416-.197v-16.5A2.75 2.75 0 0015.25 0h-10.5zM10 12.018l-5.295 4.486L4 16.064V2.75C4 1.784 4.784 1 5.75 1h8.5c.966 0 1.75.784 1.75 1.75v13.314l-.705.44L10 12.018z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  
  );
}

export default Card;
