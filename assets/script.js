// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ibrahim Smadi" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const qtyGb  = document.querySelector('#qty-gb')
const qtyCc  = document.querySelector('#qty-cc')
const qtySugar  = document.querySelector('#qty-sugar')
const qtyTotal = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created By ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    gb = gb + 1
    qtyGb.textContent = ` ${gb}`
    qtyTotal.textContent = gb + cc + sugar
})
gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
    gb = gb - 1 
    qtyGb.textContent = ` ${gb}`
    qtyTotal.textContent = gb + cc + sugar

})
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    qtyCc.textContent = ` ${cc}`
    qtyTotal.textContent = gb + cc + sugar
    console.log('Chocolate Chip + button was clicked!')

})
ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1
    qtyCc.textContent = ` ${cc}`
    qtyTotal.textContent = gb + cc + sugar
    console.log('Chocolate Chip - button was clicked!')

})
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    qtySugar.textContent = `${sugar}`
    qtyTotal.textContent = gb + cc + sugar
    console.log('Sugar + button was clicked!')

})
sugarMinusBtn.addEventListener('click', function() {
    sugar = sugar - 1
    qtySugar.textContent = `${sugar}`
    qtyTotal.textContent = gb + cc + sugar
    console.log('Sugar - button was clicked!')

})
