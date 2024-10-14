function yardGardening (input){
let yards = Number(input[0]);

let totalPrice = yards * 7.61;
let discountPrice = totalPrice * 0.18;
let finalPrice = totalPrice - discountPrice

console.log (`The final price is: ${finalPrice} lv.`)

console.log (`The discount is: ${discountPrice} lv.`)

}
yardGardening (["550"])