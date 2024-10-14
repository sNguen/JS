function fishTank (input){
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);

let volumeInLiters = (lenght * width * height) / 1000;
let neededLiters = volumeInLiters * (1 - 0.17);

console.log(neededLiters)

}
fishTank (["85 ","75 ","47 ","17 "]);