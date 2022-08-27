const lightmode = document.getElementById('change-mode')
const body = document.querySelector('body')

lightmode.addEventListener('click' , function () {
    this.classList.toggle('change-mode')
    if (this.classList.toggle('change-mode')) {
        body.style.background = 'white';
        greeting.style.color = 'black';
        
    }
})
