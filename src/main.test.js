const calculate = require('./main');

describe('String calculator', () => {
    it('Suma Numeros separados por comas', () => {
        const result = calculate('1, 1');
        expect(result).toEqual(2);
    });

    it('Suma pasando texto por parametros', () => {
        const result = calculate('a ,1');
        expect(result).toEqual(1);
    })

    it('Suma Varios números separados por comas', () => {
        const result = calculate('3, 2, 6');
        expect(result).toEqual(11);
    });
})

describe('String calculator con separador', () => { 
    it('Suma números separados con almohadilla', () => {
        const result = calculate('//#;1#1');
        expect(result).toEqual(2);
    });
});
