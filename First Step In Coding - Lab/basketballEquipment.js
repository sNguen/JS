function basketballEquipment (input){
let annualPayment = Number(input[0]);

let sneakersPrice = 0.6 * annualPayment;
let clothesPrice = 0.8 * sneakersPrice;
let ballPrice = (1 / 4) * clothesPrice;
let accessoriesPrice = (1 / 5) * ballPrice;

let totalPrice = annualPayment + sneakersPrice + clothesPrice + ballPrice + accessoriesPrice;

console.log(totalPrice)

}

basketballEquipment (["365"])