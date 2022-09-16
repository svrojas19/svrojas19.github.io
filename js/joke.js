window.addEventListener('DOMContentLoaded', chistesAleatorios)

let chiste = document.getElementById("chiste"); 
let respuesta = document.getElementById("respuesta");
let Botonchiste= document.getElementById("onemore");  

Botonchiste.addEventListener("click",chistesAleatorios)

function chistesAleatorios(){
const endpoint ="https://api.dadjokes.io/api/random/joke";
fetch(endpoint)
.then(response => response.json())
.then(data => {
const listaChistes = data.body; 
const primerChiste = listaChistes[0];
const setup = primerChiste.setup;
const punchline = primerChiste.punchline; 
document.getElementById("chiste").innerHTML = setup; 
document.getElementById("respuesta").innerHTML = punchline;
console.log(setup,punchline)
}).catch(error => {
    document.getElementById("chiste").innerHTML ="Error"
})

async function apiAsync(){
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log("async",data)
}
apiAsync()
}

