import React,{useState}from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';

const Form = () => {
    const[details,setDetails]=useState({
        title:"",
        body:"",
        userId:""
        });
        const navigate = useNavigate();
    const handleChange =(event)=>{
    
const {name,value}=event.target;

setDetails((prev)=>{
    return{...prev, [name]: value};

}
    )};
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(details);

        fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST',body:JSON.stringify(details)
    , headers:{'Content-type': 'application/json; charset=UTF-8'} })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("sucess");
      //go to details page
navigate("/Page2")
    })
    .catch((error) => {
        alert("error");
      console.error("Error:", error);
    });

    }
   
    
return(
<div className='user'>
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">title</label>
    <input type="text" id="demo" name="title" placeholder="Your text.." onChange={handleChange}/>
    <label htmlFor="body">body</label>
    <input type="text"  name="body" placeholder="Your body.."  onChange={handleChange}/>
    <label htmlFor="userId">userId</label>
    <input type="number" name="userId" placeholder='Enter Your userId'  onChange={handleChange}/>
    {/*<label htmlFor="phoneno">ContactNo</label>
    <input type="tel"  name="contact" placeholder="Enter Your Phone num.."  onChange={handleChange}/>*/}
    <input type="submit" value="Submit" />
    </form>

</div>

    )
};
export default Form;
