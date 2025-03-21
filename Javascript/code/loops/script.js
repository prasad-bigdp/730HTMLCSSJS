let i = 0; //initialization;
while (i <= 10) // condition
{
    console.log(i);
    i++; //updation
}
//using while loop print 20 to 1 in reverse
i = 10;
do
{
    console.log(i);
    i--;
} while (i >= 0);
// using do while , try to print letters of a name in reverse
//"PRASAD"==> D A S A R P
let n = "PRASAD";
i = n.length-1
do
{
    console.log(n.charAt(i));
    i--;
} while (i >= 0)
n="JAVASCRIPT"
// for loop
for (let i = 0; i < n.length; i++)
{
   console.log(n.charAt(i)) 
}
//using for , print even number from 1 to 20 in reverse order
for (i = 20; i > 1; i--) {
	if (i % 2 == 0) {
		console.log(i)
	}
}
i = 19;
if (i % 2 == 0)
{
    for (; i >= 2; i -= 2) {
			console.log(i)
		}
}
else
{
    i--;
     for (; i >= 2; i -= 2) {
				console.log(i)
			}
}
// array is a collection of values
let arr = [5, 4, 3, 7, 9];
console.log(arr[0],arr[1],arr[2],arr[3],arr[4])
// for loop to print array values
for (i = 0; i < arr.length; i++)
{
    console.log(arr[i])  //standard for
}
// for...of 
arr = [6, 7, 1, 3, 2];
for (let x of arr)
{
    console.log(x)
}
for (let x in arr) {
	console.log(arr[x])
}

let str= ["raj","vani","shekhar"]
for (let i = 0; i < str.length; i++){
    console.log(str[i]) // str[0] str[1] str[2]
}
for (let i of str){
	console.log(i) // str[0] str[1] str[2]
}
for (let i in str) {
	console.log(str[i]) // str[0] str[1] str[2]
}













