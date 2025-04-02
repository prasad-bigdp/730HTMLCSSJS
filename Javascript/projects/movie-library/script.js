let movies = [
	{
		title: "RRR",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
	},
	{
		title: "Salaar",
		url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
	},
	{
		title: "Pushpa",
		url: "https://m.media-amazon.com/images/S/pv-target-images/54381614afdbd42b2637f2ebb6572841b2c45ea1f0a1d0a421a925740cecc5d0._SX1080_FMjpg_.jpg",
	},
	{
		title: "RRR",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
	},
	{
		title: "Salaar",
		url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
	},
	{
		title: "Pushpa",
		url: "https://m.media-amazon.com/images/S/pv-target-images/54381614afdbd42b2637f2ebb6572841b2c45ea1f0a1d0a421a925740cecc5d0._SX1080_FMjpg_.jpg",
	},
	{
		title: "RRR",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
	},
	{
		title: "Salaar",
		url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
	},
	{
		title: "Pushpa",
		url: "https://m.media-amazon.com/images/S/pv-target-images/54381614afdbd42b2637f2ebb6572841b2c45ea1f0a1d0a421a925740cecc5d0._SX1080_FMjpg_.jpg",
	},
	{
		title: "RRR",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
	},
	{
		title: "Salaar",
		url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
	},
	{
		title: "Pushpa",
		url: "https://m.media-amazon.com/images/S/pv-target-images/54381614afdbd42b2637f2ebb6572841b2c45ea1f0a1d0a421a925740cecc5d0._SX1080_FMjpg_.jpg",
	},
	{
		title: "RRR",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
	},
	{
		title: "Salaar",
		url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
	},
	{
		title: "Pushpa",
		url: "https://m.media-amazon.com/images/S/pv-target-images/54381614afdbd42b2637f2ebb6572841b2c45ea1f0a1d0a421a925740cecc5d0._SX1080_FMjpg_.jpg",
	},
]
function displayData ()
{
    movies.forEach((v,i) =>
    {
        const movieDiv= document.createElement('div')
        const movieImage = document.createElement('img')
        movieImage.src = v.url;
        movieImage.alt = v.title;
        const movieName = document.createElement('h2');
        movieName.textContent = v.title;
        movieDiv.append(movieImage, movieName)
        document.getElementById("main").append(movieDiv)
    })
}
displayData()