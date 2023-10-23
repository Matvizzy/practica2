const a = 3; 
const b = 4; 
const c = 5; 
var p = a+b+c / 2;

const S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log('Площадь треугольника по формуле Герона',S.toFixed(0),'квадратных сантиметров');