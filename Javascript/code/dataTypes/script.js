let a = 5;
a = 5 + '5';
a = "prasad" + 2;  //"prasad"+"2"
console.log(a,typeof a); //number
a = "prasad" 
console.log(typeof a) //string
a = true;
a = 1 + true; //1+1
console.log(a, typeof a); //boolean



let p = 25 - 'p';
p = Infinity;
p = 5.4183;
console.log(p, typeof p)
console.log(p.toFixed(2)) //5.41 -- string
p = 25;
console.log(p.toString(2)) //11001 - string
p = 5 + +'5';
console.log(p) //10
//Math methods
console.log(Math.sqrt(16)) //4
console.log(Math.cbrt(27)) //3
console.log(Math.abs(-10)) //10
console.log(Math.max(5, 1, 3, 4, 6)) //6
console.log(Math.min(3, 4, 2, 1, 8)) //1
console.log(Math.ceil(4.1)) //5
console.log(Math.floor(4.8)) //4
console.log(Math.round(4.8)) //5
console.log(Math.round(Math.random() * 10000)) //0-1  0.41234,0.814256
console.log(Math.pow(2,3), 2**3)

//strings
let q = `prasad`
console.log(q,typeof q)
q = 25;
console.log(`the value of q is ${q}`)
let cost = 4, tax = 5,quantity=10
console.log(`The Total of buying ${quantity} apples with 
    each cost ${cost} is ${quantity * cost} but also adds
     the tax of ${tax} is ${(tax/100)*(cost*quantity)} `)

// string methods
let str = "prasad"
console.log(str.length) //6
console.log(str[0])
console.log(str[0] + str[1]) //pr -- string concatenation
console.log(str.toUpperCase()) //PRASAD
console.log(str.toLowerCase()) //prasad
console.log(str.startsWith("pr")) //true
console.log(str.endsWith("pr")) //false


























