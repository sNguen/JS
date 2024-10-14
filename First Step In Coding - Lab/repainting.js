// · Предпазен найлон - 1.50 лв. за кв. метър
// · Боя - 14.50 лв. за литър
// · Разредител за боя - 5.00 лв. за литър
function repainting (input) {
let naylon = Number(input[0]) + 2;
let paint = Number(input[1]);
let tinner = Number(input[2]);
let workHours = Number(input[3]);

let naylonPrice = naylon * 1.50;
let paintPrice = (paint * 0.1 + paint) * 14.5; 
let tinnerPrice = tinner * 5;


let totalMaterialPrice = naylonPrice + paintPrice + tinnerPrice + 0.4;
let workersPricePerHour = totalMaterialPrice * 0.3;
let totalPrice = totalMaterialPrice + workHours * workersPricePerHour;

console.log (totalPrice)

}
repainting (["10 ","11 ","4 ","8 "]);