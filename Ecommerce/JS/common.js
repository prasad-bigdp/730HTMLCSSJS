const arr = JSON.parse(localStorage.getItem('cartItems')) ?? [];
function addCartLogic (pro)
{
    arr.push(pro)
    localStorage.setItem('cartItems',JSON.stringify(arr))
    localStorage.setItem('count', arr.length)
    document.getElementById('cartCount').textContent= localStorage.getItem('count')
}