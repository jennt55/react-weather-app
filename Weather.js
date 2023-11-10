import "./Weather.css";

export default function App() {
  return (
    <div className="Weather">
      <div classNameName="container">
        <div className="weather-box">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city name here"
                  className="form-control"
                  id="city-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <h1 id="city"></h1>
          <ul>
            <li id="date-time">Date and time</li>
            <li id="description"></li>
          </ul>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex weather-temperature">
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/098/857/original/weather_planet.jpg?1696327490"
                  alt="sunshine"
                  id="icon"
                />
                <div>
                  <strong id="temperature"></strong>
                  <span className="units">
                    <strong id="temperature"></strong>
                    <small>
                      <a href="#" id="celsius-link">
                        °C
                      </a>{" "}
                      |
                      <a href="#" id="fahrenheit-link">
                        °F
                      </a>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/jennt55/weather-app-wk7" target="_blank">
          Open-source code
        </a>
        <span> by Jenn Taft</span>
      </footer>
      ;
    </div>
  );
}
