import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
    const numeros = 123;
    const objeto = {
        nombre: 'jerry',
        edad: 23
    };
    return ( 
        <>
            {/* <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

export default PrimeraApp;