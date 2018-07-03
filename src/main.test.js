const strCalculator = require('./main');

describe('String calculator', () => {
    it('Numeros separados por comas', () => {
        const result = strCalculator('1, 1');
        expect(result).toEqual(2);
    });

    it('Numeros separados por comas mal', () => {
        const result = strCalculator('1 ,1');
        expect(result).toEqual(2);
    })

    it('Pasando texto por parametros', () => {
        const result = strCalculator('a ,1');
        expect(result).toEqual(0);
    })

    it('Valores grandes', () => {
        const result = strCalculator('3, 2');
        expect(result).toEqual(5);
    });

    it('Valores erroneos', () => {
        const result = strCalculator('3, 2');
        expect(result).not.toEqual(4);
    });


})