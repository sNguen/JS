// • Пакет химикали - 5.80 лв.
// • Пакет маркери - 7.20 лв.
// • Препарат - 1.20 лв (за литър)

function studyMaterials (input){
let numberPens = Number (input[0]);
let numberMarkers = Number (input[1]);
let litersCleaningAgent = Number (input[2]);
let discountPercent = Number(input[3]) / 100;

let totalPrice = (numberPens * 5.80) + (numberMarkers * 7.20) + (litersCleaningAgent * 1.20) 
let priceWithDiscount = totalPrice * discountPercent 
let finalPrice = totalPrice - priceWithDiscount
console.log (finalPrice)

}

studyMaterials (["2 ", "3 ", "4 ", "25 "]);