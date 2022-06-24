let num1 = prompt("Enter first number");
let operator =prompt("Enter choice: +,-,*,/,%");
let num2 =prompt("Enter second number");

 num1=Number(num1);
 num2=Number(num2);

let calc= ["+", "-", "*", "/", "%"];
let result;
if(operator === calc[0]){
    result = num1+num2;
}else if(operator === calc[1]){
    result= num1-num2;
}
else if(operator=== calc[2]){
    result= num1*num2;
}
else if(operator=== calc[3]){
    result= num1/num2;
}
else if (operator=== calc[4]){
    result= num1%num2;
}
alert(result);


