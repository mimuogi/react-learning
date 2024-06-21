import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root')!)

//Los componentes de React se escriben en PascalCase para diferenciarse de las etiquetas HTML
//const Button = ({text}:{text:string}) => {}


root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)