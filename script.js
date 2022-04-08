let user= prompt("Welcome to GC mini golf! What is your name?");

let count= Number (prompt("Hi, " + user + "!" + " Would you like to play 3 or 6 holes?"));

let total= 0;
let putt ; 

for (let i=1; i <= count; i ++) {
putt= Number(prompt("How many putts for hole " + i + "?" + " (par is 3)"));
total += putt;
}
console.log(total ); 

if (count == 3 && total > 9) {
console.log("Nice try, " + user + "..." + " Your total par was " + (9-total) + " +(par).");
}

else if (count == 3 && total < 9) {
console.log("Great job, " + user + "!" + " Your total par was " + (9-total) + " -(par).");
}

else if (count == 6 && total > 18) {
console.log("Nice try, " + user + "..." + "Your total par was " + (18-total) + " +(par).");
}
else if (count == 6 && total < 18) {
console.log("Great job, " + user + "!" + " Your total par was " + (18-total) + " -(par).");

}
else if  (count ==3 && total === 9){
console.log ("Good game, " + user + "."+ " Your total par was 0.");
}

else if (count== 6 && total === 18){
console.log ("Good game, " + user + "." + "Your total par was 0.");
}