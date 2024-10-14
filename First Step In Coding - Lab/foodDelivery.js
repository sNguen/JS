// • Пилешко меню – 10.35 лв.
// • Меню с риба – 12.40 лв.
// • Вегетарианско меню – 8.15 лв.

function foodDelivery (input){
let chickenMenus = Number(input[0]);
let fishMenus = Number(input[1]);
let veggieMenus = Number(input[2]);
 
let menusPrice = chickenMenus * 10.35 + fishMenus * 12.40 + veggieMenus * 8.15;
let dessertPrice = menusPrice * 0.2;
let totalPrice = menusPrice + dessertPrice + 2.50;

console.log (totalPrice);

}

foodDelivery(["9 ", "2 ", "6 "]);