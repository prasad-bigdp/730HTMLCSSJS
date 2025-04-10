console.log(window)
window.navigator.geolocation.getCurrentPosition(
    (pos) => { console.log(pos.coords.latitude, pos.coords.longitude) })
console.log(window.location.href)
const data = document.getElementById('cd').textContent;
const vd= document.getElementById('vd')
document.getElementById('btn').addEventListener('click', ()=>
{
    // window.navigator.clipboard.writeText(data).then(() => console.log("copied"))
    // window.navigator.clipboard.readText().then((d)=>console.log(d))
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((str) => vd.srcObject = str);
})
localStorage.setItem('v', 25);
localStorage.setItem("j", 25)
localStorage.removeItem('v')
const z = localStorage.getItem('j');
