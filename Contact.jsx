import React, {useState} from 'react';
const Contact = () => {
  const [fullName,setFullName] = useState({
    fname: "",
    phone: "",
    email:"",
    message:"",
     });
     const inputEvent = (event) => {
         console.log(event.target.value);
         console.log(event.target.name);
 
         const {name, value} = event.target;
         
 
         setFullName((preValue) => {
             return{
                 ...preValue,
                 [name] : value,
             };
         });
     };
 
 
     const onSubmit = (event) => {
         event.preventDefault();
         alert("form submitted");
     };

  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact US</h1>
    </div>
    <div calssName="container contact_div">
      <div className="row">
        <div classname="col-md-6 col-10 mx-auto text-center">
        <form onSubmit={onSubmit}>
        <div className="mb-3">
  <label for="FullName" class="form-label">FullName</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="fname" onChange={inputEvent} value={fullName.fname}  placeholder="Enter your Name"/>
</div>
 <div class="mb-3">
  <label for="" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" onChange={inputEvent} value={fullName.phone}  placeholder="Enter your Phone"/>
</div>
 <div class="mb-3">
  <label for="" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onChange={inputEvent} value={fullName.email}  placeholder="Enter Your @email"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Message</label>
  <textarea  class="form-control" id="exampleFormControlInput1" name="message" onChange={inputEvent} value={fullName.message}  ></textarea>
</div>
<div className="col-12">
  <button className="btn btn-outline-primary fw-bold">submit form</button>
</div>

        </form>
  </div>
  
</div>
        </div>
      
    

    </>
  )};
  export default Contact;
  

