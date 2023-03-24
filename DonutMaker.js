'use scrict';
alert('hello from js');
//increase amount by clicks
let donutCount = 0;
//for every increment add a second, buy one take one second, by 2 take two seconds, etc
let autoClickerCount = 0;
//number of donuts to purchase an autoClicker
//increase by 10% for every purchase
let autoClickerCost = 100;
//Increase by 20% for every purchase, also increases value count of manual and automatic
let donutMultiplierCount = 0;
//number of donut cost to purchase multiplier donut, increment by 10% for each purchase
let donutMultiplierCost = 10;

//increments automatically for us every second
const autoClicker = () => {

}

//Multiplies Donut for each click
const donutMultiplier = () => {
    //fomula
    Math.pow(1.2, donutMultiplierCount);
}