function calculate(numberParams) {
    const separator = ',';
    return numberParams.split(separator).map(value => {
        return Number(value.trim());
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

module.exports = calculate;