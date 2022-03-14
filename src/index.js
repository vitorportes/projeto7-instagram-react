// const { useLayoutEffect } = require("react/cjs/react.production.min");

import ReactDOM from "react-dom";

// componente = função que retorna código HTML
function Lista() { 
  return (
    <ul>
      <li>Tópico 1</li>
      <li>Tópico 2</li>
    </ul>
  );
}

const lista = Lista(); // o que eu quero renderizar
const divRoot = document.querySelector(".root"); // onde eu quero renderizar
ReactDOM.render(lista, divRoot); 
