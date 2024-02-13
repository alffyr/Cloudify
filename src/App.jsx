import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import Weather from "./components/Weather";
import { getWeather } from "./services/weather.services";
import Card from "./components/Card";

const App = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeather({
      city: "Malang",
      callback: (data) => {
        setWeather(data);
      },
    });
  }, []); // Tambahkan dependensi kosong agar useEffect hanya dipanggil sekali pada awal render

  return (
    <div className="flex h-screen p-10">
      <div className=" w-1/3">
        <div className="flex flex-col h-full justify-between">
          <div>
            <SearchBox />
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <Weather />
          </div>
        </div>
      </div>
      <div className="border-solid border border-black w-full">
        <div>
        </div>
      </div>
    </div>
  );
};

export default App;
