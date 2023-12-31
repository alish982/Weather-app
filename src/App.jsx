import React, { useState } from 'react';

const api = {
  key: '65a30237c825635d9a5898c0857dd900',
  base: "https://api.openweathermap.org/data/2.5/" }

function App() {

    const [query, setQuery ] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
      if (evt.key === 'Enter') {
         fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
         .then(res => res.json())
         .then(result => {setWeather(result);
         setQuery('');
        console.log(result)
        });

    }
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate(); 
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return  `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != 'undefined') ?
    ((weather.main.temp >20) ?"app warm" : "app") : "app"} >
      <main>
        <div className="search-box">
          <input 
          onChange = {e => setQuery (e.target.value )}
          value = {query}
          type = 'text' 
          className = 'search-bar'
          onKeyDown = {search}
          placeholder = 'search...'/>
          
        </div>
        <div>
          {(typeof weather.main != 'undefined') ? (
          <div>
            <div className="location-box"> 
            <div className='location'>{weather.name},{weather.sys.country} </div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp) }°C
          </div>
          <div className="weather">
            {weather.weather[0].main}<br />
           <div className="feelslike">Feels Like : {Math.round(weather.main.feels_like)}°C </div>
           <div className="maxtemp">Max Temp: {Math.round(weather.main.temp_max)}°C<br />
            Min Temp: {Math.round(weather.main.temp_min)}°C </div>
            </div>
            </div>
         </div>
          ) : ('')}
        </div>
      </main>
      </div>
     
  
  )
}

export default App


















