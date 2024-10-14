function projectCreation (input){
let architectureName = input[0];
let numberOfProjects = Number(input[1]);

let totalHours = numberOfProjects * 3;

console.log(`The architect ${architectureName} will need ${totalHours} hours to complete ${numberOfProjects} project/s.`)

}
projectCreation (["George ", "4 "])