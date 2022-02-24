import React from "react";
import {NavLink} from "react-router-dom";
import Common from "./Common";
const img = "https://img.freepik.com/free-vector/vector-cartoon-background-overtime-police-department-private-detective-night-dark-room-with-desk-computer-chair-client-interior-cabinet-investigation-moonlight-from-window_33099-1301.jpg?w=740";

const About = () => {
  return(
   <>
   <Common name="Welcome to About page" imgsrc={img} visit="/contact" btnname="Contact Now" />
    </>
 )};
 export default About;