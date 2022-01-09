import react from "react";
import Navbar from "./components/navbar.js";
import Jumbotron from "./components/jumbotron.js";
import Footer from "./components/footer.js";
import { CardContainer } from "./components/CardContainer.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <CardContainer />
      </div>

      <Footer />
    </>
  );
}

export default App;
