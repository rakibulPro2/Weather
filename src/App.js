import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [city, setCity] = useState("");
  let [wdetails, setWdetails] = useState();
  let [isLoading, setIsLoading] = useState(false)


  let getData = (event) => {
    setIsLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a60c84f94e94ad950c1ebbe843f1c5a3&units=matic`,
    )
      .then((res) => res.json())
      .then((finalRes) => {
        if(finalRes.cod == "404"){
          setWdetails(undefined)
        }else{
          setWdetails(finalRes)
        }
      });

    event.preventDefault();
    setCity("");
    setIsLoading(false)
  };

  return (
    <div className="w-[100%] h-[100vh] bg-emerald-500">
      <div className="w-[1320px] mx-auto text-center">
        <div>
          <h1 className="text-white font-bold text-[30px] py-5 text-center">
            Weather Check
          </h1>
          <form onSubmit={getData}>
            <input
              className="w-[520px] px-3 py-4 rounded-sm shadow-lg"
              type="text"
              placeholder="City Name"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <button className="px-5 py-4 bg-white ml-4  rounded-sm shadow-lg">
              Search
            </button>
          </form>
        </div>

        <div className="w-[400px] bg-white mx-auto shadow-lg mt-[40px] p-[25px] relative">
          <img width={50} src="https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif" className={`absolute left-[43%] ${isLoading ? '' : 'hidden'}`}/>
          {wdetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                {wdetails.name} <span className="bg-[yellow] text-sm px-1">{wdetails.sys.country}</span>
              </h3>
              <h2 className="font-bold text-[40px]">{wdetails.main.temp}</h2>
              <img className="mx-auto" src={`https://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} />
              <p>{wdetails.weather[0].description}</p>
            </>
          ) : (
            <h4>No Data</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
