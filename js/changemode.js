const ChangeMode = document.getElementById('changemode')
ChangeMode.addEventListener('click',cambiarmodo)

function cambiarmodo() {
let body= document.querySelector('.body');
body.classList.toggle('cambiarmodo');

let nav= document.querySelectorAll('.nav1');
nav.forEach(element =>{
    element.classList.toggle('navnegro');
})

let greeting= document.querySelectorAll('.greeting');
greeting.forEach(element =>{
    element.classList.toggle('greetingnegro');
})

let title= document.querySelectorAll('.title');
title.forEach(element =>{
    element.classList.toggle('titlenegro')
})


let workeasier= document.querySelectorAll('.work-easier');
 workeasier.forEach(element =>{
    element.classList.toggle('work-easiernegro');
})
 

let h1= document.querySelectorAll('.h1');
h1.forEach(element =>{
    element.classList.toggle('h1black');
})


let text= document.querySelectorAll('.text');
text.forEach(element =>{
element.classList.toggle('textblack');

})
let readjoke= document.querySelectorAll('.readjoke');
readjoke.forEach(element =>{
element.classList.toggle('readjokeblack');
})
let jokesbox= document.querySelectorAll('.jokesbox');
jokesbox.forEach(element =>{
element.classList.toggle('jokesboxblack');
})

let textjokes= document.querySelectorAll('.text');
textjokes.forEach(element =>{
element.classList.toggle('textwhite');
})

let input= document.querySelectorAll('.input');
input.forEach(element =>{
element.classList.toggle('inputwhite');

})

let experiencebox= document.querySelectorAll('.experiencebox');
experiencebox.forEach(element =>{
element.classList.toggle('experienceboxblack');
})

let titulos= document.querySelectorAll('.titulos');
titulos.forEach(element =>{
element.classList.toggle('tituloswhite');
})

let description= document.querySelectorAll('.description');
description.forEach(element =>{
element.classList.toggle('descriptionwhite');
})

let practice= document.querySelectorAll('.practice');
practice.forEach(element =>{
element.classList.toggle('practiceblack');
})

let company= document.querySelectorAll('.company');
company.forEach(element =>{
element.classList.toggle('companywhite');
})

let img= document.querySelectorAll('.logowwcode');
img.forEach(element =>{
element.classList.toggle('change-logo');
})

let img1= document.querySelectorAll('.logo-logo')
img1.forEach(element =>{
element.classList.toggle('change-logo1');
})
}

