let user= prompt("Welcome to GC mini golf! What is your name?");
console.log(user);

let count= prompt("Hi, " + user + "!" + " Would you like to play 3 or 6 holes?");
console.log(count);

let total= 0;

for (let i=1; i < count; i ++) {
let putt = prompt("How many putts for hole " + i + "?" + "(par is 3)");
total += putt;
}

if (putt === 3 , total > 9) {
console.log("Nice try, " + user + "Your total par was" + total + " +(par)");
}
else if (putt=== 3, total < 9) {
console.log("Great job,  " + user + "!" + "Your total par was" + total + " -(par)");
}

else (putt ===3, total === 3);
console.log ("Good game,  " + user + "Your total par was 0.");

if (putt === 6, total > 18) {
console.log("Nice try, " + user + "Your total par was" + total + " +(par)");
}
else if (putt === 6, total < 18) {
console.log("Great job,  " + user + "!" + "Your total par was" + total + " -(par)");

}
else (putt=== 6, total === 18);
console.log ("Good game,  " + user + "Your total par was 0.");