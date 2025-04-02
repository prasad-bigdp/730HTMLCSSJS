// document.addEventListener('keypress', fun)
// function fun (e)
// {
//     if (e.key == 'r')
//     {
//             document.body.style.background = "red"
//     }
// }
// function fun2() {
// 	document.body.style.background = "white"
// }
function fun (e)
{
    const inp = e.target.value;
    console.log(inp)
}
function submitLogic (e)
{
    e.preventDefault()
    console.log(e.target[0].value)
}








