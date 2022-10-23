const ScrollAnimation = ScrollReveal ({
    origin: 'left',
    distance: '60px',
    duration: 3000,
    delay: 200,
})

ScrollAnimation.reveal('.section-secondary')
ScrollAnimation.reveal('.resume', {interval: 300})



/* ScrollReveal dos Botões */

const ScrollAnimationPrimary = ScrollReveal ({
    origin: 'right',
    distance: '60px',
    duration: 1000,
    delay: 200,
})

ScrollAnimation.reveal('.botoes', {interval: 100})


var paragrafo = document.querySelector('p')
var cursor = document.querySelector('.cursor')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      paragrafo.innerHTML = texto.charAt(index) 
    } else {
      paragrafo.innerHTML += texto.charAt(index) 
    }

    paragrafo.innerHTML += '|'

    index++
    setTimeout(escrever, 50)

  } 
}

escrever()


const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});


