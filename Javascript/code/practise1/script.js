// let input = document.getElementById('inp');
// let para = document.getElementById('para');
// let vowels = ['a', 'e', 'i', 'o', 'u'], vowelCount = 0; consonantCount = 0;
// function add ()
// {
//     if (input.value == '')
//     {
//         para.textContent = "The input field is required"
//         para.style.color='red'
//     }
//     else
//     {
//     for (let i = 0; i < input.value.length; i++) {
// 			if (vowels.includes(input.value[i].toLowerCase())) {
// 				vowelCount++
// 			} else {
// 				consonantCount++
// 			}
// 		}
// 		para.textContent = `The total number of characters:${input.value.length}, The number of vowels are ${vowelCount} and  the number of consonants are ${consonantCount}`
//     }
    
// }
const colors=['red','green','yellow','violet','blue']
function add ()
{
   const rind= Math.floor(Math.random() * 5)
    document.body.style.backgroundColor=colors[rind]
}