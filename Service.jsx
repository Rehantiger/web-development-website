import React from "react"
import Card from "./Cards";
import Srdata from "./Srdata";
const Service = () => {
  return(
    <>
    
<div className="my-5">
  <h1 className="text-center">Our Services</h1>
</div>
<div calssName="container-fluid mb-5">
  <div className="row">
    <div className="col-10 mx-auto">
      <div className="row gy-4">
    {
      Srdata.map((val,ind) => {
        return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
      })}
    
        </div>
      </div>
    </div>
  </div>

    </>
  );
}
export default Service;