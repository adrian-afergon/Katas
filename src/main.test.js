const calculate = require('./main');

describe('String calculator', () => {
    it('Numeros separados por comas', () => {
        const result = calculate('1, 1');
        expect(result).toEqual(2);
    });

    it('Numeros separados por comas mal', () => {
        const result = calculate('1 ,1');
        expect(result).toEqual(2);
    })

    it('Pasando texto por parametros', () => {
        const result = calculate('a ,1');
        expect(result).toEqual(1);
    })

    it('Valores grandes', () => {
        const result = calculate('3, 2');
        expect(result).toEqual(5);
    });

    it('Valores erroneos', () => {
        const result = calculate('3, 2');
        expect(result).not.toEqual(4);
    });


})