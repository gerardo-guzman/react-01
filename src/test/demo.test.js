
describe('Pruebas en el archvio demo.test.js', () => {
    test('Deben ser iguales los strings', () => {
    
        // 1. inicialización
        const mssg = 'Hola mundo';
    
        //2. estímulo
        const mssg2 = `Hola mundo`;
    
        //3. Observar comportamiento
        expect(mssg).toBe(mssg2);

    });


});

