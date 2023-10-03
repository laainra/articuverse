import React from "react";
import Footer from "../components/General/Footer";
import Hero from "../components/Home/Hero";
import Arts from "../components/Home/Arts";
import Navi from "../components/General/Navbar.jsx";

function Home() {
  return (
    <>
        <Navi />
      <Hero />
      <Arts />
      <Footer />
    </>
  );
}

export default Home;
