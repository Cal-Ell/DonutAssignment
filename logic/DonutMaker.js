'use scrict';
const trackerCount = document.getElementById("tracker-count");
const totalDonutCount = document.getElementById("donut-count");
//increase amount by clicks
let donutCount = 0;

const totalAutoClickerCount = document.getElementById("auto-count");
//for every increment add a second, buy one take one second, by 2 take two seconds, etc
let autoClickerCount = 0;
//number of donuts to purchase an autoClicker
//increase by 10% for every purchase
let autoClickerCost = 100;
//Increase by 20% for every purchase, also increases value count of manual and automatic
let donutMultiplierCount = 0;
//number of donut cost to purchase multiplier donut, increment by 10% for each purchase
let donutMultiplierCost = 10;

totalDonutCount.innerHTML = donutCount;
trackerCount.innerHTML = donutCount;
totalAutoClickerCount.innerHTML = autoClickerCount;

const incrementDonut = () => {
    donutCount++
    totalDonutCount.innerHTML = donutCount;
    trackerCount.innerHTML = donutCount;
}

//increments automatically for us every second
const autoClicker = () => {
    
}

//Multiplies Donut for each click
const donutMultiplier = () => {
    //fomula
    Math.pow(1.2, donutMultiplierCount);
}

const incrementCount = document.getElementById("increment-donut");
incrementCount.addEventListener('click', incrementDonut);

const incrementAutoCount = document.getElementById("increment-auto-count");
incrementAutoCount.addEventListener('click', autoClicker);