//creating a promise
let k = 10;
let p = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        if (k % 2 == 0) return resolve("100000")
        else return reject("i will not give")
    },5000)
})
//use a promise
p
    .then((v1) => v1 * 2)
    .then((v2) => v2 * 2)
    .then((ans)=>console.log(ans))
    .catch((err) => console.log(err))


fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) =>
    {
        data.forEach((v, i) =>
        {
            const image = document.createElement('img');
            image.src = v.image;
            document.getElementById('main').appendChild(image)
        })
    })
    .catch((err) => console.log(err))