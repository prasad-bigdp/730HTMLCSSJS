// console.log(document)
// console.log(document.getElementsByTagName('h1')[0])
// document.getElementsByTagName("h1")[0].textContent = "Bye World"

// document.getElementsByTagName('p')[0].textContent = "HEllo"

// document.getElementsByClassName("bujji")[1].textContent = "😂(windows+.)"

// document.getElementById('chitti').textContent = "bye bye"

// document.querySelector('.bujji').textContent = "good morning"
// console.log(document.querySelectorAll('.bujji'))

// function increase ()
// {
//     let para = document.getElementById("chitti")
// 		para.textContent = +para.textContent + 1
// }

let para = document.getElementById('count');
let input = document.getElementById('inp');
let c = 0;
function incr ()
{
  if (c < 20)
  {
    c++
    para.textContent = input.value;
    para.style.color = "red";
    para.style.backgroundColor = "green"
    para.style.animationName = "slideDown"
  }
  else
  {
    alert("max limit reached")
  }
}
function decr ()
{
  if (c > 0)
  {
    c--
		para.textContent = c
  }
  else
  {
    alert("negitive values are not allowed")
  }
}
function reset ()
{
  c = 0;
  para.textContent = c;
}











