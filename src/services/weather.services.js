import axios from "axios";

export const getWeather = ({ city, callback }) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6bfa9b824ba875760e35c2235a81beb4`
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
