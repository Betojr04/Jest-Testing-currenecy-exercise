// sum test
const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

//conversion test
test("One euro should be 1.06 dollars", function(){
    const {fromEuroToDollar} = require('./app.js')
    const dollars = fromEuroToDollar(1)
    const expected = 1 * 1.06; 
     expect(dollars).toBe(expected); 
})
test("One dollar should be 137.71 in Yen", function(){
    const {fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(1)
    const expected = 1 * 137.71; 
     expect(yen).toBe(expected);
})
test("One yen should be .060 in pound", function(){
    const {fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(1)
    const expected = 1 * .006; 
         expect(pound).toBe(expected);
})