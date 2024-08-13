"use client"
import React, { useState ,useEffect} from 'react'

export default function Page() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    alert("your click is confirmed")
  
  }, [count])
  

  return (
    <div>
      <p>Press this button number of times {count} </p>
      <button onClick={() => setCount(count + 1)}> Click me </button>
    </div>
  );
}
