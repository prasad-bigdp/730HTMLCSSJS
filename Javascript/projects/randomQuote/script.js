const mainDiv = document.getElementById('main');
async function fetchData ()
{
    // fetch("https://dummyjson.com/quotes/random")
    //     .then((res) => res.json())
    //     .then((data)=>displayData(data))
    //     .catch((err) => console.log(err))
    try
    {
         const res = await fetch("https://dummyjson.com/quotes/random")
          const data = await res.json()
          displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData()
function displayData (data)
{
    const q = document.createElement('h2');
    const a = document.createElement('h3');
    q.textContent = data.quote;
    a.textContent = data.author;
    mainDiv.append(q,a)
}



