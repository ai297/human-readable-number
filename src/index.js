const NUMBERS = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
}

module.exports = function toReadable (number) {
    if(number == 0) return 'zero'
    let hundreds = Math.floor(number / 100)
    let dozens = 10 * Math.floor(number % 100 / 10)
    let num = number % 10

    let result = []
    if(hundreds > 0) result.push(`${NUMBERS[hundreds]} hundred`)
    if(dozens >= 20) {
        result.push(NUMBERS[dozens])
        if(num > 0) result.push(NUMBERS[num])
    } else if(dozens > 0) result.push(NUMBERS[dozens + num])
    else if(num > 0) result.push(NUMBERS[num])

    return result.join(' ')
}
