import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Cards from "../component/Cards";
import Carousel from "../component/Carousel";

export default function Home() {
  return (
    <>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className="m-4">
       <Cards/>
       <Cards/>
       <Cards/>
      </div>
      
      <div><Footer /></div>
    </>
  );
}
