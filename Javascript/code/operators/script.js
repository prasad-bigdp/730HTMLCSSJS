// aritematic
let a = 5, b = 10;
console.log(a + b); //15
console.log(a - b); //-5
console.log(a * b); //50
console.log(a / b); //0.5
console.log(a % b); //5 -- remainder
console.log(b ** a);  //10 power 5- 100000

// relational 
console.log(a > b); //false
console.log(a < b); //true
console.log(a >= b); //false
console.log(a <= b); //true
a = 5, b = '5';
console.log(a == b); //true -checks whether a value is equal to b value and it won't check data types
console.log(a === b); //false - strict equals checks whether a value is equal to b value and it check data types
console.log(a != b); //false -checks whether a value is equal to b value and it won't check data types
console.log(a !== b); //true -checks whether a value is equal to b value and it check data types

// logical
// they are used for logical conclusions
a = 10, b = 20;
console.log((a > 5) && (b < 50)) // logical and is true when all of the conditions are true
console.log((a > 5) || (b < 50)) // logical OR is false when all of the conditions are false
console.log(!(a>5)) //logical NOT returns negation of result

//Assignment operatoes
a = 5;
a += 2; //a=a+2 ==>a=7
a -= 2; // a=a-2
a *= 2; //a=a*2
a /= 2; //a=a/2
a %= 2;//a=a%2;
a **= 2; //a=a**2;

//increment and decrement
// ++ -- increase value by 1
// -- -- decrease value by 1

a = 5;
a++; //post increment -- assign and update
console.log(a) //6
++a; //pre increment -- update & assign
console.log(a) //7
a = 5;
let y = ++a + 5
console.log(y)
a = 5;
y = a++ + ++a + a;
console.log(y)
a = 2; b = 3;
y = ++a + a++ + a-- + --a;
console.log(y)

// unary +
// + is used to convert any value into number
console.log(5 + +'5') // 5+5 =10

//Ternary operator or conditional operator
// (conditio) ? value1 : value2 ;
a = 5;
let c = (a > 2) ? 10 : 20;
console.log(c) //10 because condition is true
c = (a < 2) ? 10 : 20;
console.log(c) //20 because condition is false

// optional chaining operator
b=5,c=10
a = b ?? c; // it will choose b
b = null;
a = b ?? c; // it will choose c
// ?? operator lets you choose between two values, if first value is not undefined or null , then it choose first option else it chooses second option























































