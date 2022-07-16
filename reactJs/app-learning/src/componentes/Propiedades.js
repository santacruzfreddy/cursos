import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <ul>
        <li>
          <h3>Pruebas basicas: {props.porDefecto}</h3>
        </li>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "true" : "fasle"}</li>
        <li>{props.arreglo.join(" ,")}</li>
        <li>{props.arreglo.map(props.funcion).join(" ,")}</li>
        <li>{props.objeto.name + " " + props.objeto.age}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props",
};

Propiedades.propTypes = {
  cadena: PropTypes.string,
  numero: PropTypes.number.isRequired
};
