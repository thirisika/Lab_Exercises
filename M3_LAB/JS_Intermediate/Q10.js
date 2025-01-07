const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

//Print the total number of minutes that have passed so far today
console.log(today.getHours()*60+today.getMinutes() + ' minutes have passed so far today');

//Print the total number of seconds that have passed so far today
console.log(today.getHours()*60+today.getMinutes()*60+today.getSeconds() + ' seconds have passed so far today');

//calculate and print my age with years,months and days

const Bday=new Date('1996-07-20');
const [tyear,tmonth,tdate]=[today.getFullYear(),today.getMonth(),today.getDate()]
// console.log(tyear-Bday.getFullYear());
// console.log(tmonth-Bday.getMonth());
// console.log(tdate-Bday.getDate());
let yy=tyear-Bday.getFullYear();
let mm=tmonth-Bday.getMonth();
let dd=tdate-Bday.getDate();


if(dd<0){
    mm=mm-1;
    dd=dd+30; // jo: ok for this exercise, but not all months have 30 days
}

if(mm<0){
    yy=yy-1;
    mm=mm+12;
}

console.log('I am '+yy+' years, '+mm+' months and '+dd+ ' days old');

function daysInBetween(date1, date2){
    let oneDay=24 * 60 * 60 * 1000;
    let diffDays = Math.abs((date1.getTime() - date2.getTime()) / (oneDay)); 
    return diffDays;
}

let d1=new Date('2023-12-10');
let d2=new Date('1990-09-08');

console.log(daysInBetween(d1,d2));