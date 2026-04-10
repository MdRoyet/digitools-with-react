import "./App.css";
import React, { Suspense } from "react";
import NavBar from "./Component/NavBar/NavBar";
import Banner from "./Component/Banner/Banner";

function App() {
  return (
    <>
      {/* Navbar */}
      <NavBar></NavBar>

      {/* Banner */}
      <Banner></Banner>
    </>
  );
}

export default App;
