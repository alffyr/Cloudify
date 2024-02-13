import React from "react";

const Weather = ({
  image = "404.png",
  desc = "",
  date = "",
  day = "",
  hour = "",
  city = "Malang",
  children = 0,
}) => {
  if (city == "") {
    return (
      <div className="flex justify-center items-center flex-col h-full">
        <img src={image} alt="" className="w-1/2 my-4" />
        <div className="flex my-4 mb-0">
          <div>
            <h1 className="text-7xl">{children}</h1>
          </div>
          <div className="font-light text-xl flex mt-1">
            <h1>°C</h1>
          </div>
        </div>
        <h1 className="font-medium">Silahkan Masukkan Nama Wilayah</h1>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col h-full">
        <img src={image} alt="" className="w-1/2 my-4" />
        <div className="flex my-4 mb-0">
          <div>
            <h1 className="text-7xl">{children}</h1>
          </div>
          <div className="font-light text-xl flex mt-1">
            <h1>°C</h1>
          </div>
        </div>
        <h1 className="font-medium">{desc}</h1>
        <hr className="w-1/2 my-4 bg-gray-200 border dark:bg-gray-700" />
        <div className="text-center my-3">
          <p className="text-sm font-light">{date}</p>
          <h1 className="">
            {day}, {hour}
          </h1>
        </div>
        <h1 className="text-2xl my-8">{city}</h1>
      </div>
    );
  }
};

export default Weather;
