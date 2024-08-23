                             //BASIC
//console.log(`Hello`)
//console.log(`Hello`)

//window.alert(`Welcome to my learnig platform`);
//window.alert(`Your Website as been Clashed`);
//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like my website`
                        
                             //How to accept javascript user input
//1. EASY WAY = WINDOW PROMPT
//2. PROFESSIONAL WAY = HTML TEXTBOX
//let username;

//username = window.prompt("What's your username");

//console.log(username);

//2. PROFESSIONAL WAY = HTML TEXTBOX

//let username;
//document.getElementById("mysubmit").onclick = function () {
//username = document.getElementById('myText').value;
//document.getElementById("myh1").textContent = `Hello ${username}`
//}
                            //variable 
                            // A container thats store a value.
                        //behaves as if were the value it contect.

                                //1. decalration let x;
                                //2.assignment   x = 100;
//let age = 205;
//let price = 150;
//let gpa = 2.1;
//console.log(typeof age)
//console.log(`You are ${age} years old`);
//console.log(`Your price $${price}`);
//console.log(`Your gpa is: $${gpa}`);

// TYPE CONVERSION = Change the datatype of a valie to another (string, numbers, Booleans)

//let age = window.prompt("How old are you?");
//age=Number(age)
//age+= 1;
//console.log(age, typeof age);

//Counter Program
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function () {
    count --;
    countlabel.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}