function calculate(expression) {
    const separator = ',';
    const numbers = expression.split(separator);

    let result = 0;
    for (let index =0; index < numbers.length; index++) {
        if (!isNaN(numbers[index])) {
            result += Number(numbers[index]);
        }  
    }
    return result;
}


module.exports = calculate;