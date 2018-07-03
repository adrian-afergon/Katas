function calculate(numberParams) {
    const separator = ',';
    return numberParams
        .split(separator)
        .map(value => Number(value))
        .filter(number => !isNaN(number))
        .reduce((previousValue, currentValue) =>
            previousValue + currentValue,
            0
        );
}

module.exports = calculate;