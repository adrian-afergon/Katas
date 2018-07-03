const calculate = require('./main');

describe('String calculator', () => {
    it('Numeros separados por comas', () => {
        const result = calculate('1, 1');
        expect(result).toEqual(2);
    });

    xit('Numeros separados por comas mal', () => {
        const result = calculate('1 ,1');
        expect(result).toEqual(2);
    })

    xit('Pasando texto por parametros', () => {
        const result = calculate('a ,1');
        expect(result).toEqual(0);
    })

    xit('Valores grandes', () => {
        const result = calculate('3, 2');
        expect(result).toEqual(5);
    });

    xit('Valores erroneos', () => {
        const result = calculate('3, 2');
        expect(result).not.toEqual(4);
    });


})