function calculate(expression) {
    const separator = ',';
    const numbers = expression.split(separator);
    if (numbers.length > 0) {
        if (numbers.length > 1) {
            if (!isNaN(numbers[0]) && numbers[1]){
                return Number(numbers[0]) + Number(numbers[1]);
            }
            return 0;
        }
        return !isNaN(numbers[0]) ? Number(numbers[0]) : 0
    }
    return 0;
}


module.exports = calculate;