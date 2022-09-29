const ChangeMode = document.getElementById('changemode')
ChangeMode.addEventListener('click',cambiarmodo)

function cambiarmodo() {
   let body= document.querySelector('.body');
   body.classList.toggle('cambiarmodo');

   let link= document.querySelectorAll('.p');
   link.forEach(element =>{
      element.classList.toggle('white');
   })

   let box= document.querySelectorAll('.darkmode');
   box.forEach(element =>{
      element.classList.toggle('lightmode');
   })
}