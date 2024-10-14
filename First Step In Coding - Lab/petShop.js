function petShop (input){
let dogPackets = Number(input[0]);
let catPackets = Number (input[1]);

let totalPrice = dogPackets * 2.50 + catPackets * 4;

console.log(`${totalPrice} lv.`);

}
petShop(["5 ", "4 "]);