function sumNumbersFrom(expression) {
    let separator = ',';
    const separatorPattern = '//';
    const stringSeparator = ';';

    if (expression.startsWith(separatorPattern)) {
        let configuration = expression.split(stringSeparator)[0];
        expression = expression.split(stringSeparator)[1];
        indexSeparator = configuration.indexOf(separatorPattern);
        separator = configuration.substring(indexSeparator + separatorPattern.length);
    }
    const numbers = expression.split(separator);
    let result = 0;
    for (let index =0; index < numbers.length; index++) {
        if (!isNaN(numbers[index])) {
            result += Number(numbers[index]);
        }  
    }
    return result;
}


module.exports = sumNumbersFrom;