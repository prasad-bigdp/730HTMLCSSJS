let arr = [5, 9, 6, 7, 4];
console.log(arr[1])
// let x1=arr[0],x2=arr[1],x3=arr[2]
let [a, b, c, d, e] = arr; // Array destructuring
let p = 5, q = 10;
[q, p] = [p, q];
let obj = {
    name: "raj",
    age:55
}
console.log(obj.age, obj['age'])
let { name, age } = obj;
console.log(age); //object destructuring

let obj1 = {
	id: 1,
	ordinal: 1,
	name: "George Washington",
    yearsInOffice: "1789-1797",
    fun:function(){console.log("hi")},
	vicePresidents: ["John Adams"],
	photo:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/220px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
}
 let { vicePresidents,fun } = obj1;
console.log(vicePresidents)
fun();
let x = 20;

export {obj1,fun,vicePresidents,arr}

export default x;



