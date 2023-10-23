const people = 6;
const bill = 3000;
const tea = 500;
const endbill = bill + tea;
const billpay = Math.floor(bill / people);
console.log(`Со всех ${billpay} рублей.Общий счет ${endbill} рублей и чаевыми на ${tea} рублей`);