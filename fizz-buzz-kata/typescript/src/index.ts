const validateQuantity = (quantity: number) => {
  if(quantity < 1) {
    throw new Error(`Quantity lower than 1 is not allowed, your value was ${quantity}`)
  }

  if (quantity > 100) {
    throw new Error(`Quantity higher than 100 is not allowed, your value was ${quantity}`)
  }
}

const isMultiplesOf = (quantity: number, multiple: number) => {
  return quantity % multiple === 0
}

const quantityContains = (quantity: number, symbol: string) => {
  return String(quantity).includes(symbol)
}

export const fizzBuzz = (quantity: number) => {
  validateQuantity(quantity)
  let result = ''
  for (let index = 1; index <= quantity; index++) {

    const multipleOfThree = isMultiplesOf(index, 3)
    const multipleOfFive = isMultiplesOf(index, 5)

    const containsThree = quantityContains(index, '3')
    const containsFive = quantityContains(index, '5')

    if ((multipleOfThree || containsThree) && (multipleOfFive || containsFive)) {
      result += 'FizzBuzz'
    } else if (multipleOfThree || containsThree) {
      result += 'Fizz'
    } else if(multipleOfFive || containsFive) {
      result += 'Buzz'
    } else {
      result += index
    }

    if (index !== quantity) {
      result += '\n'
    }
  }

  return result
}