import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas asíncronas', () => {
    test('Debe de retornar un heroe async', (done) => {
         const id = 1;
         getHeroeByIdAsync(id).then(hero => {
            expect(hero).toBe( heroes[0] );
            done();
         });
    });
});


