function calculate(expresion) {
    let separator = ',';
    if (expresion.startsWith('//')){

    }
    return expresion
        .split(separator)
        .map(value => Number(value))
        .filter(number => !isNaN(number))
        .reduce((previousValue, currentValue) =>
            previousValue + currentValue,
            0
        );
}

function extractSeparator(numberParams) {

}

module.exports = calculate;