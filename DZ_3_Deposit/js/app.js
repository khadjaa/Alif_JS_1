const input = 1000;

const maxPrecentYearly = 6;
const minPrecentYearly = 4;

const maxMonthly = (input * maxPrecentYearly / 100) / 12;
const minMonthly = (input * minPrecentYearly / 100) / 12;
const maxYearly = input * maxPrecentYearly / 100;
const minYearly = input * minPrecentYearly / 100; 

console.log(maxMonthly);
console.log(minMonthly);
console.log(maxYearly);
console.log(minYearly);