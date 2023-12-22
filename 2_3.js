var x = Number(prompt('введите число: '));
var a = 2.1;
if (-2 < x && x <= 0) {
f = 1/(1+a * Math.abs(x));
console.log("функция 1: ", f);
}
b = 0.7;
if (x <= -2) {
f = (Math.cos(b*x*x) + 0.5*x);
console.log("функция 2: ", f);
} 
if (x > 0) {
f = Math.sqrt(1+(Math.pow(Math.E,a*x)));
console.log("функция 3: ", f);
} 