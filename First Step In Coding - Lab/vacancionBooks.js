function vacancionBook (input){
let pagesInBook = Number (input[0]);
let pagesPerHour = Number (input[1]);
let days = Number (input[2])


let totalHours = pagesInBook / pagesPerHour;
let hoursPerDay = totalHours / days;

console.log (hoursPerDay)

}
vacancionBook (["432", "15", "4"])