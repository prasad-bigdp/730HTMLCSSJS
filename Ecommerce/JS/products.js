const fetchData = async (url) => {
	try {
		const res = await fetch(url)
		const data = await res.json()
		displayData(data.products)
	} catch (err) {
		console.log(err)
	}
}
fetchData("https://dummyjson.com/products")
const mainDiv = document.getElementById("mainProducts")
function displayData(data) {
    console.log(data)
    mainDiv.textContent=''
	data.forEach((v, i) => {
		const pDiv = document.createElement("div")
        pDiv.classList.add("card", "p-3")
        const link = document.createElement('a');
        link.href = `./product.html?pid=${v.id}`
        link.classList.add("card-title", "h-25")
		const img = document.createElement("img")
		img.src = v.thumbnail
		img.alt = v.title
		img.classList.add("card-img-top")
		const title = document.createElement("h2")
		title.textContent = v.title
        title.classList.add("card-title", "h-25")
        link.appendChild(title)
		const price = document.createElement("p")
		price.textContent = "$" + v.price
		price.classList.add("card-text")
		const addCart = document.createElement("button")
		addCart.textContent = "Add To Cart"
		addCart.classList.add("btn", "btn-outline-success")
		addCart.addEventListener("click", () => addCartLogic(v))
		pDiv.append(img, link, price, addCart)
		mainDiv.appendChild(pDiv)
	})
}
const select = document.getElementById("cat")
const fetchCategories = async () => {
	try {
		const res = await fetch("https://dummyjson.com/products/category-list")
		const data = await res.json()
		displayCategories(data)
	} catch (err) {
		console.log(err)
	}
}
fetchCategories()
function displayCategories (data)
{
    data.forEach((v, i) =>
    {
        const option = document.createElement("option")
        option.value = v;
        option.textContent = v;
        select.appendChild(option)
    })
}
select.addEventListener('change', (e) =>
{
 fetchData(`https://dummyjson.com/products/category/${e.target.value}`)   
})

const searchinput = document.getElementById("searchInput")
document.getElementById("searchForm").addEventListener("submit", (e) => {
	console.log(searchinput.value)
    e.preventDefault()
	fetchData(`https://dummyjson.com/products/search?q=${searchinput.value}`)
})