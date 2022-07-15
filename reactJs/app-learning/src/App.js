import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = "Otaku SF";
  let meses = ["enero", "Febrero", "Marzo"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {name}
          </a>
        </header>
        <div className="footer">
          <ul>
            {meses.map((mes, index) => (
              <li key={index}>
                <h1>{mes}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
