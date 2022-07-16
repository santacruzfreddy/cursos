import logo from "./logo.svg";
import "./App.css";
import Componente from "./componentes/Componente";
import Propiedades from "./componentes/Propiedades";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
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
            Learn React
          </a>
        </section>

        <section>
          <Componente msg="Soy Un Componente" />
          <hr />
          <Propiedades
            cadena="esta es una cadena"
            numero={27}
            booleano={false}
            arreglo={[1, 2, 3, 4]}
            objeto={{ name: "freddy", age: "34" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento react</i>}
            componenteReact={<Componente msg="Soy Un componete como props" />}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
