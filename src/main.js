function calculate(expression) {
    if (!isNaN(expression)){
        return Number(expression);
    }
    return 0;
   
}


module.exports = calculate;