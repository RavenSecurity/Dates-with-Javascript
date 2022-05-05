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


// Exercise 4
var myVar=setInterval(myTimer, 1000);
    function myTimer(){
        var a=new Date();
        document.getElementById("time").innerHTML=a.toLocaleTimeString();
    }