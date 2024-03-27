// import List from './Components/List';
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Counter from "./Components/Counter.jsx";
import Child from "./Components/Child.jsx";

// import { useState } from 'react';
// import  Siderbar from  "./Components/Siderbar.jsx";
// import Dashboard from "./Components/Dashboard.jsx"

function App() {
  // const [name , setname] = useState("ukasha") ;
  // const [value , setvalue] = useState("")
  //   const products = [
  //     { title: 'Cabbage', isFruit: false, id: 1 },
  //     { title: 'Garlic', isFruit: false, id: 2 },
  //     { title: 'Apple', isFruit: true, id: 3 },
  //     { title: 'banana', isFruit: true, id: 4 },
  //     { title: 'Carrot', isFruit: false, id: 4 },
  //   ];
  const [value, setvalue] = useState(1);
  const [name, setname] = useState("");
  const [count, setcount] = useState(0);
  const [task, settask] = useState([]);

  const taskRef = useRef(null);

  // useEffect(()=>{
  // console.log("testing1..")
  // },[])

  // useEffect(()=>{
  // console.log("testing2 ..")
  // })

  // useEffect(()=>{
  //   console.log("testing three..")
  // } , [name])

  const handleSubmit = () => {
    const { current } = taskRef
    settask([ current.value, ...task])
    console.log(taskRef)
  };

  return (
    <>
      <Child count={count} />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Child Inc 
      </button>

      <div>
        {/* onChange={(e)=>settask(e.target.value) } */}

        <input type="text" ref={taskRef} placeholder="enter task " />
        <button onClick={handleSubmit}> Add </button>

      {<ul>
        {
          task.map((el, idx) => <li key={idx}>{el}</li>)
        }
      </ul>
        } 
      </div>

      {/* <h1   style={{color : "brown"}}>My {name } List  </h1>

      <button onClick={() => setname( "Muhammad Ukasha")}> Change the Value </button>
      
      <List productsData={products} />


     <input value={value} type="text" onChange={ (e) => setvalue(e.target.value)} /> 
     <h2> {value}</h2>
     <button onClick={() => setvalue("")}>Reset Value</button> */}

      {/* <Dashboard/> */}

      <div className="">
        <h1> Name : {name} </h1>
        <button
          onClick={() => {
            setname("M Ukasha");
          }}
        >
          {" "}
          Change{" "}
        </button>
      </div>

      <div className="">
        {value < 20 && <Counter value={value} />}
        <button
          onClick={() => {
            setvalue(value + 1);
          }}
        >
          {" "}
          Inc{" "}
        </button>
        <button
          onClick={() => {
            setvalue(value - 1);
          }}
        >
          {" "}
          Dec{" "}
        </button>
      </div>
    </>
  );
}

export default App;
