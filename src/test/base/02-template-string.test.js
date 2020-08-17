import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string.js', () => {

    test('prueba en metodo getSaludo', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
        console.log(saludo)
    });

    test('debería ser Gerardo si esta vacío', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Gerardo');
    });

});

