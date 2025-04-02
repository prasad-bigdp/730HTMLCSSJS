const myPara= document.getElementById('para')
function change ()
{
	myPara.innerHTML = "<b>bye world</b>"
	myPara.style.color = "red"
	// myPara.classList.add("animate-slide")
	const newEle = document.createElement("img") //<img />
    newEle.src = "https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF1000,1000_QL80_.jpg"
    newEle.height="200"
    //<img src="https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF1000,1000_QL80_.jpg"/>
    document.getElementById("main").appendChild(newEle)
}