// import React from "react";
import company from "./assets/companies.png";
const Company = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">Join in globally renowned companies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <img src= {company} alt="Company 1" className="h-16 px-3.5" />
        {/* <img src="company2.png" alt="Company 2" className="h-16" />
        <img src="company3.png" alt="Company 3" className="h-16" /> */}
      </div>
    </div>
  );
};

export default Company;
