import { useEffect } from "react"


const Counter = ({value}) => {

useEffect(()=>{
    console.log("from Counter")
    return()=>{
        console.log("Counter Mar gya")
    }
},[])

  return (
    <div> value : {value}</div>
  )
}

export default Counter