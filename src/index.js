import React from 'react';
import ReactDOM from 'react-dom';

//components
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

//styles
import './index.css';
import PrimeraApp from './PrimeraApp';

/* const saludo = <h1>HOLA MUNDO</h1>; */

const ref = document.querySelector('#root');

//ReactDOM.render(<CounterApp value={10}/>, ref);
ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku"/>, ref);
