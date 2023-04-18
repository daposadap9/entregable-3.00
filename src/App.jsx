import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const logic = location?.residents.length

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));

  };
  console.log(location)
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center"><img src="/images/nombre.png" /></div>
      <form className="z-10 text-center " onSubmit={handleSubmit} action="">
        <div className="mt-20">
          <input className="p-3 rounded-xl"
            id="locationId"
            placeholder="Type a location id....."
            type="text"
          />
          <button className="bg-red-950 p-3 text-white rounded-lg">
            Search <i className="bx bx-search"></i>
          </button>
        </div>
        <b><h2 className="text-3xl text-amber-200 pt-10 pb-10 bg-red-950 w-3/5 flex justify-center rounded-3xl mx-auto mt-20  ">Welcome to the crazy universe!</h2></b>
      </form>

      <Location location={location} />
      <ResidentList location={location} />

      <div>
        {
          logic <= 8 ? <img className="fixed top-0 h-full z-[-10] w-full object-cover" src="/images/Frame3.png"></img> :
            <div>
              <img className="absolute top-0 w-full object-cover z-[-10]" src="/images/Frame1.png" />
              <img className="absolute w-full object-cover z-[-10]" src="/images/Frame2.png" />
            </div>
        }
      </div>
    </div>
  );
}

export default App;
