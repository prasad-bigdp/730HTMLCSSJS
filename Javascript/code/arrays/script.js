let arr = [5, 4, 3, 2, 1];
arr[5] = 25;
console.log(arr[5])
console.log(arr.length) //6
arr[25] = 100;
console.log(arr.length) //26

let x = [10, 20, 30];
x.push(40,50,60)
console.log(x) //[10,20,30,40,50,60]
x.pop();
console.log(x) //[10,20,30,40,50]
x.unshift(-10, -8, 0);
console.log(x) //[-10,-8,0,10,20,30,40,50]
x.shift()
console.log(x) //[-8,0,10,20,30,40,50]
x.splice(4, 2)
console.log(x)//[-8,0,10,20,50]
x.splice(2, 2, 101, 102, 103)
console.log(x) //[-8,0,101,102,103,50]
x.splice(1, 0, 4, 5)//[-8,4,5,0,101,102,103,50]
arr = [5, 4, 3, 2];
arr.reverse()
console.log(arr)//[2,3,4,5,4]
console.log(arr.indexOf(4))
console.log(arr.lastIndexOf(28)) //-1 means it is not there in array
console.log(arr.includes(28)) //false


arr=["raj","prasad","toasti","shyam"]
arr.forEach(function (v, i) { console.log(v.length) })
arr = [1, 2, 3];
arr.forEach( (v, i) => console.log(v * v) );
// 1 4 9
let y = arr.forEach((v) => { return v * 2 });
console.log(y); //undefined
let z = arr.map((v) => { return v * 2 });
console.log(z); //[2,4,6]
arr=[]

arr=["prasad","shekhar","john"]
let z1= arr.forEach(function (str)
{
    return str.charAt(0)
})
console.log(z1)
let z2 = arr.map(function (str) {
	return str.charAt(0)
})
console.log(z2) //[p,s,j]























