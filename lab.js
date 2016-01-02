//вывести числа от 322 до 356 % 3 =0
var num=356;
for(var cnt=322; cnt<=num; cnt++){
    if (cnt%3!=0){
        continue;
    }
    print(cnt);
    break;
}
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
/* два ы степени 10
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