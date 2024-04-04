import "./App.css";
import image from "./assets/image.png";
import Checkbox from "./assets/Checkbox.png";



function container() {
  return (
    <>
      <div className="content-container">
        <div className="content-container__text">
          <p> <img src = {Checkbox} alt="checkbox" />Your Trusted Career Patner</p>

          <h1>Unlock Your Dream <span style={{color:'#01A3E0'}}>Career</span></h1>
          <p>
            Our platform is dedicated to empowering individuals, connecting
            talent with the right opportunities, and fostering professional
            growth.
          </p>

          <div className="cont-input-bar">
            <input
              className="cont-input"
              type="text"
              placeholder="Job tittle, Keyword..."
            />
            <input
              className="cont-input"
              type="text"
              placeholder="Enter Location"
            />
            <button className="cont-btn">Search Job</button>
          </div>
          <p>Popular Searches: Designer, Developer, Programmer, Architect</p>
        </div>
        <div className="content-container__image">
          <img src={image} alt="Image" />
        </div>
      </div>
    </>
  );
}

export default container;
