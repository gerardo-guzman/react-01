import React from 'react';
import ReactDOM from 'react-dom';

//components
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

//styles
import './index.css';

/* const saludo = <h1>HOLA MUNDO</h1>; */

const ref = document.querySelector('#root');

ReactDOM.render(<CounterApp value={10}/>, ref);