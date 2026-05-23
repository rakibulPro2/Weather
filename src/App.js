import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [city, setCity] = useState('')
  console.log(city)

  let getData = (event) =>{


    event.preventDefault()
    setCity('')
  }

  return (
    <div className="w-[100%] h-[100vh] bg-emerald-500">
      <div className="w-[1320px] mx-auto text-center">
        <div>
          <h1 className="text-white font-bold text-[30px] py-5 text-center">
            Simple Weather Check For UAE
          </h1>
          <form onSubmit={getData}>
            <input
              className="w-[520px] px-3 py-4 rounded-sm shadow-lg"
              type="text"
              placeholder="Check Weather for city"
              value={city}
              onChange={(event)=>setCity(event.target.value)}
            />
            <button className="px-5 py-4 bg-white ml-4  rounded-sm shadow-lg">
              Search
            </button>
          </form>
        </div>

        <div className="w-[400px] bg-white mx-auto shadow-lg mt-[40px] p-[25px]">
          <h3 className="font-bold text-[30px]">
            Abu Dhabi <span className="bg-[yellow]">In</span>
          </h3>
          <h2 className="font-bold text-[40px]">9.62oc</h2>
          <img src=""></img>
          <p>Fog</p>
        </div>
      </div>
    </div>
  );
}

export default App;
