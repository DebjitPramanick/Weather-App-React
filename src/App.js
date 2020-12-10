import React from 'react';
import './App.css';

const api={
  key:"e356fa72d1eddafd60fab8f755efc020",
  url:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query,setQuery] = React.useState('');
  const [weather,setWeather] = React.useState('');

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(resp=>resp.json())
      .then(result=>{setWeather(result);setQuery('');console.log(result)});
    }
  }


  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day},${date} ${month}, ${year}`
  }

  const setClassName = () =>{
    if(typeof weather.main=="undefined")
      return "app";
    if(weather.main.temp<10)
      return "app cold";
    if(weather.main.temp>10 && weather.main.temp<20)
      return "app lcold";
    if(weather.main.temp>20 && weather.main.temp<30)
      return "app medium";
    else return "app warm";
  }

  return (
    <div className={setClassName()}>
      <main>
        <div className="search-bar">
          <input className="search-box" type="text" placeholder="Search city ..."
          onChange={e=>setQuery(e.target.value)} value={query}
          onKeyPress={search}>
          </input>
          <img className="search-btn" src="https://img.icons8.com/ios-filled/50/000000/search--v2.png" alt=""/>
        </div>

        {(typeof weather.main != "undefined")?(
          <div>
            <div className="location-box">
              <h2 className="location">{weather.name}, {weather.sys.country}</h2>
              <p className="date">{dateBuilder(new Date())}</p>
              <div className="temp">{weather.main.temp}°C</div>
              <p className="type">{weather.weather[0].main}</p>
              <div className="other-dets">
                <h4>Other details :</h4>
                <p className="others">Pressure: {weather.main.pressure}</p>
                <p className="others">Humidity: {weather.main.humidity}</p>
                <p className="others">Wind speed: {weather.wind.speed}</p>
              </div>
            </div>
          </div>
        ):('')}

        <div className="copyright">&copy; Debjit Pramanick 2020, Weather App</div>
      </main>
    </div>
  )
}

export default App;
