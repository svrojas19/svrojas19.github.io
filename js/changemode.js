const ChangeMode = document.getElementById('changemode')
ChangeMode.addEventListener('click',cambiarmodo)

function cambiarmodo() {
   let body= document.querySelector('.body');
   body.classList.toggle('cambiarmodo');

   let links= document.querySelectorAll('.p');
   links.forEach(element =>{
      element.classList.toggle('white');
   })

   let boxes= document.querySelectorAll('.darkmode');
   boxes.forEach(element =>{
      element.classList.toggle('lightmode');
   })
}