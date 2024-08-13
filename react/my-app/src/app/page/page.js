'use client'
import React, { useEffect, useState } from 'react'

function page2() {
  const[data,setData]=useState(null);

  // useEffect(() => {
  //   fetch(`https://api/data`)
  //   .then((response)=response.json())
  //   .then(data => setData(data));
  // }, 
 
  
  // [])
  
  useEffect(()=>{
    alert("this is the first alert in use effect")
  }) 
  return (
    <div>
      {data ? data.message:'Loading... error'}
    </div>
  )
}

export default page2
