import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Courselist.css';


 const Courselist =()=>{

    const [postlist, setpostlist] = useState([{"userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setpostlist(data);

        });
    },[])


    return(
      <div> 
      {postlist.map((item, index) => ( 
      <div className="gallery" key={index}>
      <img src="https://img-b.udemycdn.com/course/240x135/449532_2aa9_7.jpg" alt="Cinque Terre" />
      <div className="desc">
        
        <p className="test2">{item.title}</p>
        <p>{item.userId}</p>
        <p>{item.id}</p>
        <button><Link  to="/Page1">BUY NOW</Link></button>
        </div>
      
    </div>))}
    </div>
    )
    
 };
 export default Courselist;