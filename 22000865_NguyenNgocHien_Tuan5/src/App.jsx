import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* nav bar */}
      <Navbar />

      {/* container */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 col-md-4 bg-light p-3">
            <div className="col">
              <img
                src="../src/assets/imgs/side-bar.png"
                alt="Sidebar Image"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* item content */}
          <div className="col-lg-9 col-md-8 p-3 text-center">
            <ItemList />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
