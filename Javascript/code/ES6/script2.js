import { obj1, fun, arr } from './script.js'
import x from './script.js'
console.log(obj1.name);
fun()

class Student
{
    id; name; age;
    constructor(a,b,c)
    {
        this.id = a;
        this.name = b;
        this.age = c;
    }
    study ()
    {
        console.log("i'm studing")
    }
}
let o = new Student(123,"raj",25);
o.study()
console.log(o.id)
class Topper extends Student
{
    rank;
    constructor(a, b, c, d)
    {
        super(a, b, c);
        this.rank = d;
    }
}
let ob= new Topper(124,"suresh",26,1)
