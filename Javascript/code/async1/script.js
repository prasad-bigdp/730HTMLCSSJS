const para = document.getElementById('para');
let c = 1;
// setTimeout(function ()
// {
//     para.textContent = c;
//     c++;
// }, 1000)
// console.log("hello world")
let timer= setInterval(function () {
	para.textContent = c
    if (c == 10)
    {
        clearInterval(timer)
    }
        c++
}, 100)
function stopTimer ()
{
    clearInterval(timer)
}
// let bomb= setTimeout(function ()
// {
//     document.body.textContent = ''; 
// }, 10000)

function stopBomb ()
{
    clearTimeout(bomb)
}
