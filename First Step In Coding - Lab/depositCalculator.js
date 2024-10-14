function depositCalculator (input){
let depositSum = Number (input[0])
let months = Number(input[1]);
let percent = Number(input[2])/100

let sum = depositSum + months * ((depositSum * percent ) / 12)

console.log (sum)

}
depositCalculator (["2350", "6", "7"])