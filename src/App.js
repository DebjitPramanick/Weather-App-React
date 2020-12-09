import './App.css';

function App() {
  return (
    <div className="app cold">
      <main>
        <div className="search-bar">
          <input className="search-box" type="text" placeholder="Search city ...">
          </input>
        </div>

        <div className="location-box">
          <h2 className="location">New York City, US</h2>
          <p className="date">Wednesay, 9th December, 2020</p>
          <div className="temp">15 °C</div>
          <p className="type">Sunny</p>
        </div>

        <div className="copyright">&copy; Debjit Pramanick 2020, Weather App</div>
      </main>
    </div>
  )
}

export default App;
