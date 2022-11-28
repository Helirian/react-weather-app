// import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <footer>
          <small>
            Project made by
            <a
              href="https://github.com/Helirian"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Helirian
            </a>{" "}
            and is
            <a
              href="https://github.com/Helirian/react-weather-app.git"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sorced on GitHub
            </a>{" "}
            and
            <a
              href="https://voluble-nasturtium-6c554a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </small>
        </footer>
      </header>
    </div>
  );
}

export default App;
