import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Pruebas de exportación', () => {

    test('debe retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero); 
    });

});


