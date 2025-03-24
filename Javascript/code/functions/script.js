// simple function

function sum ()
{
    let a = 10, b = 20;
    console.log(a+b)
}

sum() //30
function sum2(a,b)
{
    console.log(a+b)
}

sum2("sunil", 2) //sunil2

function sum3 (a, b, c)
{
    if (c)
    {
        console.log(a+b)
    }
    else
    {
        console.log("not valid")
    }
}
sum3(5, 4, false)

function sum4 (a, b)
{
    return a + b;
}
let res = sum4(5, 4)
console.log(res) //9

function sum5 (a, b)
{
    console.log(a+b)
}
sum5(10)

function sum6(a=3, b=5) {
	console.log(a + b)
}
sum6(10)      //15
sum6()        //8

// default tax in system is 5% unless actual tax mentioned
function calculateTax (cost, tax = 5)
{
    let res = (tax / 100) * cost 
  console.log(cost+res)  //210
}
calculateTax(200)

function sum7(a=10, b=3, c=5)
{
    console.log(a+b+c)
}
sum7(5, 4, 3) //12
sum7(5, 4)  //5+4+5=14
sum7(5)    //5+3+5 =13
sum7()     //10+3+5 =18

//REST
function sum8 (a, ...b)
{
    console.log(a,b)// 5   [4,3,2,1]  
}
sum8(5, 4, 3, 2, 1)

function printLength (...c)
{
    console.log(c.length)
}
printLength("raj", "shekhar", "kumar", "sofia", "lena", "prasad")


//spread operator
function simpleSpread ()
{
    let arr = [5, 4];
    let arr2 = [arr, 3];
    console.log(arr2) //[[5,4],3]
    let arr3 = [...arr, 3];
    console.log(arr3) //[5,4,3]
    // add two arrays
    let a1 = [5, 4], a2 = [6, 7]
    let res = [...a1, ...a2];  //[5,4,6,7]
    console.log(res)
  }

function friends (a, ...b)
{
    console.log(b) // ["rachel", "phoebe"];
    let x=[...b,"chandler"] // ["rachel","phoebe","chandler"]
}
  friends("joey","rachel","phoebe")

function mad ()
{
    console.log("i'm mad")
} 
function bad (a)
{
    a()
}
bad(mad)

function sum (a, b)
{
    console.log(a + b);
}
function sub (a, b)
{
    console.log(a - b);
}
function cal (x, y)
{
    x(5, 4)
    y(5,4)
}
cal(sum,sub)










































