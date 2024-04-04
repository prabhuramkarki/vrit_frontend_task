// import React from "react";
import Card from "./Card";

const Tile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <div className="px-4">Tile 1</div>
        </Card>
        <Card>
          <div className="px-4">Tile 2</div>
        </Card>
        <Card>
          <div className="px-4">Tile 3</div>
        </Card>
        <Card>
          <div className="px-4">Tile 4</div>
        </Card>
        <Card>
          <div className="px-4">Tile 5</div>
        </Card>
        <Card>
          <div className="px-4">Tile 6</div>
        </Card>
        <Card>
          <div className="px-4">Tile 7</div>
        </Card>
        <Card>
          <div className="px-4">Tile 8</div>
        </Card>
        <Card>
          <div className="px-4">Tile 9</div>
        </Card>
      </div>
    </div>
  );
};

export default Tile;
