function sumNumbersFrom(expression) {

    const separatorPattern = '//';
    const stringSeparator = ';';

    function splitBy(expression, separator) {
        return expression.split(separator);
    }

    function getSeparator(separatorPattern, expression) {
        const configuration = splitBy(expression, stringSeparator)[0]
        const indexSeparator = configuration.indexOf(separatorPattern);
        return configuration.substring(indexSeparator + separatorPattern.length);
    }

    function computeResultFrom(numbers) {
        let result = 0;
        for (let index =0; index < numbers.length; index++) {
            if (!isNaN(numbers[index])) {
                result += Number(numbers[index]);
            }  
        }
        return result;
    }

    function hasPattern(expression) {
        return expression.startsWith(separatorPattern)
    }

    function calculate (expression){
        let separator = ',';
        if (hasPattern(expression)) {
            separator = getSeparator(separatorPattern, expression)
            expression = splitBy(expression, stringSeparator)[1]
        }
        const numbers = splitBy(expression, separator)
        return computeResultFrom(numbers);
    }

    return calculate(expression);
}




module.exports = sumNumbersFrom;