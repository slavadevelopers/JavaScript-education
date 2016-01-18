//lab 3-2
function compare(x){
        return function(y){
        if (y==x) 
            return null;
        return y>x;
    }
}
var c = compare(10);
print(c(9));
print(c(11));
print(c(10));
/*Рекурсия
function power(base, exp){
    if(exp == 0) return 1;
    return base * power(base, exp-1);
}
print(power(2, 1000));*/
/*не жестко определено действие
function foo(base, count, action){
    for(var i = base; i<=count; i++)
        action(i);
}
foo(1, 100000, print);*/
/*замыкание
function say (greet){
    return function(name){
        return greet + " " + name;
    }
}
var en = say("Hello");
print(en("John"));
print(en("Mike"));

var ru = say("Privet");
print(ru("Vyasya"));
print(ru("Petya"));*/
/*анонимная функция
function outer(){
    return function(x){print(x);}
}
var x = outer();
x("Hello");*/
/*функция outer, показывает различную облать деятельности переменных.
var x = "X";
var y = "Y";

function outer(){
    var x = "x";
    print("x: " + x);//x
    print("y: " + y);//Y
    y = "y";
    function inner(z) {
        var y = "_y";
        print("x: " + x);//x
        print("y: " + y);//_y
        print("z: " + z);//z
    }
    inner("z");
}
outer();
print("x: " + x);//X
print("y: " + y);//Y
*/
/*lab-3-1
function power(base, exp){
    var result=1;
    for(var cnt = 0;cnt<exp;cnt++)
        result*=base;
    return result;
}
print(power(2,10));
print(power(3,5));
print(power(5,3));*/
/*функция ads, тернарный оператор
function ads(num){
    return (num < 0) ? -num: num;
}
print(ads(5));
print(ads(-5));*/
/*функция ads, кострукция if
function ads(num){
    if (num < 0)
        return -num;
        return num;
}
print(ads(5));
print(ads(-5));*/
/*функция ads, кострукция if, else
function ads(num){
    if (num < 0)
        return -num;
    else
        return num;
}
print(ads(5));
print(ads(-5));*/
/*функция сложения
function sum(n1, n2){
    return n1 + n2;
}
var res = sum(5, 3);
print(res);
print(sum(2, 4));*/
/*декларирование и вывод функци
function sayHello(name, sign){
    name = name || "Guest";
    sign = sign || "..."
    print("Hello, "+name+sign);
}
sayHello("Petr", "!");
var n = "Mike";
sayHello(n);
sayHello();*/
/*вывести количество ворон на правельном русском языке
var num=25;
var str='На ветки сидит '+num+' ворон';
var x='';
if(num%100<11 || num%100>14){
    switch(num%10){
        case(1):x='а';break;
        case(2):x='ы';break;
        case(3):x='ы';break;
        case(4):x='ы';break;
    }
}
print(str+x);*/
/*конструкция switch
putstr('Vvedite znachenie ot 0 do 5: ');
var x=readline();
x*=1;
switch(x){
    case(0):
        print('zero');
        break;
    case(1):
        print('one');
        break;
    case(2):
        print('two');
        break;
    case(3):
        print('three');
        break;
    case(4):
        print('foure');
        break;
    case(5):
        print('five');
        break;
}*/
/*вывести числа от 322 до 356 % 3 =0
var num=356;
for(var cnt=322; cnt<=num; cnt++){
    if (cnt%3!=0){
        continue;
    }
    print(cnt);
}*/
/*лаба 2.3
var age=28;
var massege='';
if(age>=18 && age<=59){
    massege='Вам еще работать и работать';
}else if(age>59){
    massege='Вам пора на пенсию';
}else if(age>=1 && age<=17){
    massege='Вам работать еще рано - учитесь';
}else{
    massege='Значение возраста неизвестно';
}
console.log(massege);*/
/*тернарный оператор
var x=0;
var y='';
//if(x==1){
//    y='One';
//}else{
//    y='Zero';
//}
y=(x==1) ? 'one' : 'zero';
print(y);*/
/*ветвление if вывести числа от 0 до 10 и подписями нечю чет и ноль
for(var cnt=0; cnt<=10; cnt++){
if(cnt==0){
    print(cnt+' - zero');
}else if(cnt%2==0){
    print(cnt+' - even');
}else{
    print(cnt+' - odd');
}
}*/
/*используем цикл do while, пока пользователь не скажет слово стоп
do{
    putstr('Say \'stop\': ');
    var answere=readline();
    print('You say'+' \''+answere+'\'');
}while(answere!=='stop');*/
/*выводим цифры от 1 до 10 с помощью for
for(var i=1; i<=10; i++){
    print(i);
}*/
/*возводим указанное число в указанною степень помощью for
putstr('Enter number: ');
var number=readline();
putstr('Enter exp: ');
var exp=readline();
var result=1;
for (var cnt=1; cnt<=exp; cnt++){
    result*=number;
}
print(result);*/
/*отрисуем треугольник с заданным значением строк и символа
putstr('Enter count lines: ');
var lines=readline();
var line='';
putstr('Enter symobl: ');
var symbol=readline();
var cnt=1;
while(cnt<=lines){
    line+=symbol;
    print(line);
    cnt++;
}*/
/*Возводим любое число в любую степень
putstr('Enter Number: ');
var number=readline();
putstr('Enter exp your number: ');
var exp=readline();
var result=1;
var cnt=1;
while(cnt<=exp){
    result*=number;
    cnt++;
}
print(result);*/
/* два в степени 10
var number=2;
var exp=10;
var result=1;
var cnt=1;
while(cnt<=exp){
    result*=number;
    cnt++;
}
print(result);*/
/*два в степени 10 мое изначальное
var i=1, x=2;
while(i<10){
    x=x*2;
    i++;
}
print(x);*/
/*цикл от 0 до 9
var i=0;
while(i<10){
    print(i++);
}*/
/*Привет Джон
var name = 'John';
print('Hello, ' + name);*/