let n = "Prasad";
if (n == "raj")
{
 console.log("hello raj")   
}
let age = 5;
if (age >= 18)
{
    console.log("eligible to vote")
}
else
{
    console.log("he is not eligible")
}
 n=5
if (n > 0)
{
    console.log(`${n} is positive`)
}
else if (n < 0)
{
    console.log(`${n} is negitive`)
}
else
{
    console.log(`${n} is neither positive nor negitive`)
}

// take two numbers a,b and compare them and prints following status
// a is greater than b  (or) b is greater than a (or) both are equal
let a = 5, b = 2;
if (a > b)
{
    console.log(`${a} is greater than ${b}`)
}
else if (a < b)
{
    console.log(`${b} is greater than ${a}`)
}
else
{
    console.log("both are equal")
}

let user = "parent";
switch (user)
{
    case 'admin': console.log("Hi admin"); break;
    case 'parent': console.log("Hi, parent"); break;
    case 'Teacher': console.log("Hi, Teacher"); break;
    case 'student': console.log("Hi, student"); break;
    default:console.log(" please enter valid input ");
}
// write a switch case to print the day based on week number, week starts monday with value1
let value = "1"
switch (user) {
	case "1":
		console.log("Monday")
		break
	case "2":
		console.log("Tuesday")
		break
	case "3":
		console.log("Wednesday")
		break
	case "4":
		console.log("Thursday")
		break
	case "5":
		console.log("Friday")
		break
	case "6":
		console.log("Saturday")
		break
	case "7":
		console.log("Sunday")
		break
	default:
		console.log("Please enter valid input")
}




































