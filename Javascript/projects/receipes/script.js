const mainDiv = document.getElementById('main')
async function fetchData ()
{
    try
    {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json();
        displayData(data.recipes)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData()
function displayData (data)
{
    data.forEach((v, i) =>
    {
        const div= document.createElement('div')
        const image = document.createElement('img');
        const title = document.createElement('h2');
        image.src = v.image;
        image.alt = v.name;
        title.textContent = v.name;
        div.append(image, title);
        mainDiv.appendChild(div)

   }) 
}









