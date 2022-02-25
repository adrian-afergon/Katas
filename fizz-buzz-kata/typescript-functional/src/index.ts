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

const calculateValue = (value: number): string => {
  const multipleOfThree = isMultiplesOf(value, 3)
  const multipleOfFive = isMultiplesOf(value, 5)

  const containsThree = quantityContains(value, '3')
  const containsFive = quantityContains(value, '5')

  if ((multipleOfThree || containsThree) && (multipleOfFive || containsFive)) {
    return 'FizzBuzz'
  }

  if (multipleOfThree || containsThree) {
    return 'Fizz'
  }

  if(multipleOfFive || containsFive) {
    return 'Buzz'
  }

  return String(value)

}

export const fizzBuzz = (quantity: number) => {
  validateQuantity(quantity)
  return  Array(quantity).fill(null).reduce<string[]>((total, _, index) =>
    [...total, calculateValue(index + 1)], []).join('\n')
}