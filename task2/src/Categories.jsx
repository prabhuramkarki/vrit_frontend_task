// import React from "react";
import SmallCard from "./SmallCard";

const Categories = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        <SmallCard>
          <div className="px-4 h-5">SmallCard 1</div>
        </SmallCard>
        <SmallCard>
          <div className="px-4">SmallCard 2</div>
        </SmallCard>
        <SmallCard>
          <div className="px-4">SmallCard 3</div>
        </SmallCard>
        <SmallCard>
          <div className="px-4">SmallCard 3</div>
        </SmallCard>
        <SmallCard>
          <div className="px-4">SmallCard 3</div>
        </SmallCard>
        <SmallCard>
          <div className="px-4">SmallCard 3</div>
        </SmallCard>
      </div>
    </div>
  );
};

export default Categories;
