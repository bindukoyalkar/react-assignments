import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:8000/books";

export default function App() {
  const [data,setData]= useState(null);
  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
      setData(response.data);
    });
  },[]);

  if(!data) return null;
  
  return (
    <ul>
        {
          data.map(book =>
              <li key={book.id}>{book.title}</li>
            )
        }
      </ul>
  );
}