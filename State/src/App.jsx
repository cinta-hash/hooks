import { useState } from "react"
import UseReducer from "./UseReducer"
function App() {
  const [counter, setCounter]=useState(0)
  const [inputValue, setInputValue]= useState("Jacinta")

  const increment = () =>{
    setCounter(counter + 1)
  }
  const decrement = () =>{
    setCounter(counter - 1)
  }
  let onType = (e)=>{
    const newValue = e.target.value
    setInputValue(newValue)
  }
 return(
  <div className="text-center text-3xl">
    <h1>HELLO WORLD</h1>
    <button className="bg-red-300 p-2 rounded-md" onClick={decrement}> Decrement</button><br />
    {counter} <br />
    <button className="bg-red-300 p-2 rounded-md" onClick={increment}> Increment</button>
    <hr />
    <div className="mt-6">
    <input className="indent-2 rounded-md bg-red-200" type="text" placeholder="place text here" onChange={onType} />  <br />
    {inputValue}
    </div> <hr />
    <br />
    < UseReducer />
  </div>
  
 )
}

export default App
