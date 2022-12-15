// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
// module.exports = { sum };



// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }


const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = function(valueInYen){
    let valueInDollar = valueInYen * 1;
    return valueInDollar;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen,}