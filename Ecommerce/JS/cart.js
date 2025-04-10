const cartItems = JSON.parse(localStorage.getItem('cartItems'))
displayData(cartItems)
function displayData(data) {
	console.log(data)
	data.forEach((v, i) => {
		const pDiv = document.createElement("div")
		pDiv.classList.add("card")
		const img = document.createElement("img")
		img.src = v.thumbnail
		img.alt = v.title
		img.classList.add("card-img-top")
		const title = document.createElement("h2")
		title.textContent = v.title
		title.classList.add("card-title")
		const price = document.createElement("p")
		price.textContent = "$" + v.price
		price.classList.add("card-text")
		const addCart = document.createElement("button")
		addCart.textContent = "Add To Cart"
		addCart.classList.add("btn", "btn-outline-success")
		addCart.addEventListener("click", () => addCartLogic(v))
		pDiv.append(img, title, price, addCart)
		document.getElementById('main').appendChild(pDiv)
	})
}