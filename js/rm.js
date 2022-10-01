let allcharacters= document.getElementById("buttonAll")
let females= document.getElementById("buttonFemales")
let males= document.getElementById("buttonMales")
let alive= document.getElementById("buttonAlive")
let dead= document.getElementById("buttonDead")

allcharacters.addEventListener("click", buttonAll);
females.addEventListener("click", buttonFemales);
males.addEventListener("click", buttonFemales);
alive.addEventListener("click", buttonAlive);
dead.addEventListener("click", buttonDead);

function cleanCards(){
  let charactersContainer = document.getElementsByClassName("characters-container")[0]; 
  while (charactersContainer.firstChild) {        
      charactersContainer.removeChild(charactersContainer.firstChild);      
}
}

const getData=(apiURL)=>{
    return fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                crearCards(data.results)
            })
}

function buttonAll() {
  if(document.body.children[3].className=="container"){
      let claseuno=document.querySelector(".container");
      let clasedos=document.querySelector(".message");
      claseuno.removeChild(clasedos);
      let replaceClass=document.querySelector(".container");
      replaceClass.classList.replace("container","characters");
  }
  cleanCards();
  const api="https://rickandmortyapi.com/api/character";
  getData(api);
}
function buttonFemales() {
  if(document.body.children[3].className=="container"){
      let claseuno=document.querySelector(".container");
      let clasedos=document.querySelector(".message");
      claseuno.removeChild(clasedos);
      let replaceClass=document.querySelector(".container");
      replaceClass.classList.replace("container","characters");
  }
  cleanCards();
  const api = "https://rickandmortyapi.com/api/character/?gender=female";
  getData(api);
};

function buttonMales() {
  if(document.body.children[3].className=="container"){
      let claseuno=document.querySelector(".container");
      let clasedos=document.querySelector(".message");
      claseuno.removeChild(clasedos);
      let replaceClass=document.querySelector(".container");
      replaceClass.classList.replace("container","characters");
  }
  cleanCards();
  const api = "https://rickandmortyapi.com/api/character/?gender=male";
  getData(api);
};

function buttonAlive() {
  if(document.body.children[3].className=="container"){
      let claseuno=document.querySelector(".container");
      let clasedos=document.querySelector(".message");
      claseuno.removeChild(clasedos);
      let replaceClass=document.querySelector(".container");
      replaceClass.classList.replace("container","characters");
  }
  cleanCards();
  const api = "https://rickandmortyapi.com/api/character/?status=alive";
  getData(api);
};

function buttonDead() {
  if(document.body.children[3].className=="container"){
      let claseuno=document.querySelector(".container");
      let clasedos=document.querySelector(".message");
      claseuno.removeChild(clasedos);
      let replaceClass=document.querySelector(".container");
      replaceClass.classList.replace("container","characters");
  }
  cleanCards();
  const api = "https://rickandmortyapi.com/api/character/?status=dead";
  getData(api);
}

function crearCards(characters) {
  cleanCards();
  let charactersContainer = document.querySelector(".characters-container");
  
  characters.forEach(character => {
  
      charactersContainer.innerHTML += `
  <div class="character-card">
      <span>${character.name}</span>
      <div class="character-info">
          <figure>
              <img src="${character.image}" alt="">     
          </figure>
          <div>
              <p>${character.gender}</p>
              <p>${character.status}</p>
              <p>${character.species}</p>
          </div>
      </div>
  </div>    
  `
});
}
