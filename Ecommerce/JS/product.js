const params = new URLSearchParams(window.location.search)
console.log(params)
const pid = params.get('pid')
console.log(pid)
const fetchData = async (url) => {
	try {
		const res = await fetch(url)
		const data = await res.json()
		displayData(data)
	} catch (err) {
		console.log(err)
	}
}
fetchData(`https://dummyjson.com/products/${pid}`)
function displayData (obj)
{
    const leftdiv = document.createElement('div')
    const img = document.createElement('img');
    img.src = obj.thumbnail;
    img.alt = obj.title;
    img.classList.add("img-thumbnail")
    leftdiv.appendChild(img)
    const rightDiv = document.createElement('div');
    const title = document.createElement('h1')
    title.textContent = obj.title;
    const desc = document.createElement('p');
    desc.textContent = obj.description;
    const price = document.createElement('p');
    price.textContent = "Price:" + obj.price;
    const addCart = document.createElement('button')
    addCart.textContent = "Add to cart"
    addCart.classList.add("btn", "btn-success")
    addCart.addEventListener("click", () => addCartLogic(obj))
    rightDiv.append(title, desc, price, addCart)
    document.getElementById('main').append(leftdiv,rightDiv)
}