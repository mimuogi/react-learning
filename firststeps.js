import React from "https://esn.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

// REACT FIRST STEPS//

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement(
  'button', // Elemento HTML que React envuelve
  { 'data-id': 123 }, // Objeto con las propiedades para el HTML
  'Me gusta') // Contenido dentro de la etiqueta HTML

const button2 = React.createElement('button',{"data-id": 123},'Me gusta')       
const button3 = React.createElement('button',{"data-id": 123}, 'Me gusta')

// Reac puede encapsular un conjunto de cosas en una etiqueta como div por ejemplo
// const misCosas = React.createElement('div', null, [button, button2, button3])
// Para evitar dividitis, usa un React.Fragment así: (los fragments no añaden una etiqueta HTML adicional)

// eslint-disable-next-line no-unused-vars
const firstFragment = React.createElement(React.Fragment , { "data-id": 123}, 'Me gusta')

root.render(button)

// JSX //
/*
JSX is a syntax extension to write a description of the UI con js.
<React.Fragment>
    const button = React.createElement('button',{"data-id": 123}, 'Me gusta')
    const button2 = React.createElement('button',{"data-id": 123},'Me gusta')    
    const button3 = React.createElement('button',{"data-id": 123}, 'Me gusta')
</React.Fragment>


const element = <strong> Numero aleatorio: {Math.random()}</strong>
Entre {} podemos ejecutar código js, pero sólamente expresiones. (Cosas que se evaluan)

Los atributos se escriben en camelCase porque es js, no HTML (atributos-en-html)

React evita inyecciones de codigo porque no renderiza los textos como HTML sino como texto:
const response = '<script> Te hackeo, jeje </script>' 

*/