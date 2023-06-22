import React, { useState } from "react";
import  { useEffect } from "react";
import './Details.css';

const Details = ()=>{
const [posts, setposts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setposts(data);

        });
    },[])
    return(
 <div>

    <h3>Welcome Back ,My Reviews</h3>
<p>you got 5 reviews</p>
<input type="checkbox" />
  <label htmlFor="vehicle1">Add a new task...</label><br/>
  

{posts.map((item, index) => (
 <div className="enter" key={index}> 
 <input type="checkbox"/>
 <label htmlFor="vehicle1"><b>{item.title}</b></label>
 <p> {item.body}</p>
 <button>{item.userId}</button></div>   
 ))}

 </div>
    )
};
export default Details;