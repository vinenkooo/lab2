var x = Number(prompt('введите число: '));
var a = 2.1;
var b = 0.7;

switch(x) {
    case 0:
        f = 1/(1+a * Math.abs(x));
        console.log("функция 1: ", f);
        break

    case -2:
        f = (Math.cos(b*x*x) + 0.5*x);
        console.log("функция 2: ", f);
        break
    case 1:
        f = Math.sqrt(1+(Math.pow(Math.E,a*x)));
        console.log("функция 3: ", f);
        break

    default: console.log("Число не подходит к данным условиям");
}