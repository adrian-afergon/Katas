const sumNumbersFrom = require('./main');

/*
    Sumar 1 numero DONE
    Sumar 2 numeros DONE
    Sumar string vacio DONE
    Sumar 1 numero y una letra 
    Sumar varios números 
    Sumar numero y letras juntas
    Sumar numeros con separador distinto
*/

describe('String calculator', () => {
    describe('given comma separator', () => {
        it ('should sum one number', () =>{
            expect(sumNumbersFrom("1")).toBe(1);
        });
        it ('should return 0 when one string', () =>{
            expect(sumNumbersFrom("a")).toBe(0);
            expect(sumNumbersFrom("a1a")).toBe(0);
            expect(sumNumbersFrom("")).toBe(0);
        });
        it ('should sum two numbers, separeted by comma', () =>{
            expect(sumNumbersFrom("1,1")).toBe(2);
        });
        it ('should sum several numbers, separated by comma', () =>{
            expect(sumNumbersFrom("1,1,2")).toBe(4);
        });
        it ('should sum several numbers ignoring strings, separeted by comma', () =>{
            expect(sumNumbersFrom("1,a,2")).toBe(3);
        });
    });
    describe('given custom separator', () => {
        it ('should sum one number', () =>{
            expect(sumNumbersFrom("1")).toBe(1);
        });
        it ('should return 0 when one string', () =>{
            expect(sumNumbersFrom("a")).toBe(0);
            expect(sumNumbersFrom("a1a")).toBe(0);
            expect(sumNumbersFrom("")).toBe(0);
        });
        it ('should sum two numbers, separeted by custom separator', () =>{
            expect(sumNumbersFrom("//#;1#1")).toBe(2);
        });
        it ('should sum several numbers, separeted by custom separator', () =>{
            expect(sumNumbersFrom("//#;1#1#2")).toBe(4);
        });
        it ('should sum several numbers ignoring strings, separeted by custom separator', () =>{
            expect(sumNumbersFrom("//#;1#a#2")).toBe(3);
        });
        it ('should sum two numbers, separeted by custom separator', () =>{
            expect(sumNumbersFrom("//##r;1##r1")).toBe(2);
        });
    
    });
})
