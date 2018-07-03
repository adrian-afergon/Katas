const calculate = require('./main');

/*
    Sumar 1 numero
    Sumar 2 numeros
    Sumar string vacio
    Sumar 1 numero y una letra 
    Sumar varios números
    Sumar numero y letras juntas

*/

describe('String calculator', () => {
    it ('Sumar un numero', () =>{
        expect(calculate("1")).toBe(1);
    });
     it ('Sumar una letra', () =>{
        expect(calculate("a")).toBe(0);
        expect(calculate("a1a")).toBe(0);
        expect(calculate("")).toBe(0);
    });
     it ('Sumar dos numeros', () =>{
        expect(calculate("1,1")).toBe(2);
    });
    
})
