import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';
import { shallow } from 'enzyme';


describe('Pruebas en PrimeraApp component', () => {
    /* test('debe de mostar el mensaje "Hola soy goku"', () => {
        const saludo = 'Hola, soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo}/>); 
        expect(getByText(saludo)).toBeInTheDocument();
         
    }); */

    test('debe mostrar PimeraApp correctamente', () => {
        const saludo = 'Hola, Soy Goku!';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();

    });
});


