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

  return (
    <div className="app">
      <main>
        <div className="search-bar">
          <input className="search-box" type="text" placeholder="Search city ..."
          onChange={e=>setQuery(e.target.value)} value={query}
          onKeyPress={search}>
          </input>
        </div>

        {(typeof weather.main != "undefined")?(
          <div>
            <div className="location-box">
              <h2 className="location">{weather.name}, {weather.sys.country}</h2>
              <p className="date">{dateBuilder(new Date())}</p>
              <div className="temp">{weather.main.temp}°C</div>
              <p className="type">{weather.weather[0].main}</p>
            </div>
          </div>
        ):('')}

        <div className="copyright">&copy; Debjit Pramanick 2020, Weather App</div>
      </main>
    </div>
  )
}

export default App;
