function sumNumbersFrom(expression) {

    const separatorPattern = '//';
    const endSeparatorCommand = ';';
    const defaultSeparator = ',';

    function splitBy(expression, separator) {
        return expression.split(separator);
    }

    function getSeparator(separatorPattern, expression) {
        const configuration = splitBy(expression, endSeparatorCommand)[0]
        const indexSeparator = configuration.indexOf(separatorPattern);
        return configuration.substring(indexSeparator + separatorPattern.length);
    }

    function computeResultFrom(numbers) {
        let result = 0;
        numbers.map(number => {
            if (!isNaN(number)) {
                result += Number(number);
            }
        })
        return result;
    }

    function hasSpecialSeparator(expression) {
        return expression.startsWith(separatorPattern)
    }

    function calculate (expression){
        let separator = defaultSeparator;
        if (hasSpecialSeparator(expression)) {
            separator = getSeparator(separatorPattern, expression)
            expression = splitBy(expression, endSeparatorCommand)[1]
        }
        const numbers = splitBy(expression, separator)
        return computeResultFrom(numbers);
    }

    return calculate(expression);
}

module.exports = sumNumbersFrom;