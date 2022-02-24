import React from "react";
import {NavLink} from "react-router-dom";
import Common from "./Common";
const img = "https://cdn.pixabay.com/photo/2017/03/12/16/00/blue-2137334_960_720.jpg";

const Home = () => {
  return(
    <>
  <Common name="Grow your business with" imgsrc={img} visit="/service" btnname="Get Started" />
 

    </>
 )};
 export default Home;