import "./App.css";
// import Categories from "./Categories";
import Navbar from "./Navbar";
import Container from "./Container";
// import Card from "./Card";
import Footer from "./Footer";
import Tile from "./Tile";
import Company from "./Companies";


function App() {
  return (
    <>
      <Navbar />
      <Container />
      {/* <Categories /> */}
      <Tile/>
      {/* <Card/> */}
<Company/>
      <Footer />
    </>
  );
}

export default App;
