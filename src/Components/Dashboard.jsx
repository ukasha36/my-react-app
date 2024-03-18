import Siderbar from "./Siderbar"
import AppCards from "./AppCards.jsx"
import { useState } from "react"
import NavBar from "./Navbar.jsx";
 


const Dashboard = () => {
            const a = "how are you" ;
    const [value , setvalue ] = useState("hello");
  return (
    <>
 
    <div  className="main ">
        <Siderbar>
        <div>
            <h1 className="value"> {value}</h1>
            <button onClick={()=>{  setvalue(value === "hello" ? a : "hello");  }}>Change text </button>
        <AppCards/>
        </div>
        </Siderbar>


    </div>
    </>
  )
}

export default Dashboard