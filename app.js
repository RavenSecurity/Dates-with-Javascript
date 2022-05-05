// Get visitor time zone
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)


// Exercise 1
let Exo1 = ['America/Anchorage', 'Atlantic/Reykjavik', 'Europe/Moscow', 'Europe/Brussels']

let date = new Date;
Exo1.forEach((timeZone) => {

  let strTime = date.toLocaleString("en-US", {
    timeZone: `${timeZone}`
  });
  console.log(timeZone, strTime);
});


// Exercise 2
// Part 1
let startDate  = '1997-10-25';
let endDate    = '2022-05-05';

let diffInMs   = new Date(endDate) - new Date(startDate)
let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays)

// Part 2
let now = new Date()

function howManyDays(time) {
    let now = new Date();
    let diffInMs2   = new Date(now) - new Date(time)
    let diffInDays2 = diffInMs2 / (1000 * 60 * 60 * 24);
    console.log(diffInDays2 | 0)
}

howManyDays('2021-05-03')

// Exercise 3
// Part 1
var dt = new Date();
dt.setHours(dt.getHours() + 80000);
// document.write(dt);
console.log(dt)

// Part 2

let st = new Date();
function generic(inp) {
  st.setHours(st.getHours() + inp);
// document.write(dt);
console.log(st)
}
console.log(generic(30))

// Exercise 4
let myVar=setInterval(myTimer, 100);

let AMP = false

function myTimer(){
  let time = new Date();
  let a = time.toLocaleString("en-US", { hour: 'numeric',minute: '2-digit', hour12: AMP }) + ":"
  let s = time.getSeconds()

  let b = time.toLocaleString('en-us', {weekday: 'short'})
  let c = time.getDate()
  let d = time.toLocaleString('en-us', {month: 'short'})
  let e = time.getFullYear()

  document.getElementById("time").innerHTML=a;
  document.getElementById("seconds").innerHTML=s;

  document.getElementById("day").innerHTML=b;
  document.getElementById("date").innerHTML=c;
  document.getElementById("month").innerHTML=d;
  document.getElementById("year").innerHTML=e;

  // "05243523452".split("").reverse().splice(0,2).reverse().join("")
}

// toLocaleTimeString() pour avoir le format AM/PM

let ampm = document.getElementById("time")

function Twelve() {
  AMP = !AMP
}

ampm.addEventListener("click", Twelve);

console.log(ampm)