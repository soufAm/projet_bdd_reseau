let slides = document.querySelectorAll('.slide');
let btn_slide = document.querySelectorAll('.btn_slider');

let i = 0;

const flecheDroite = document.getElementById('btn_droite');
const flecheGauche = document.getElementById('btn_gauche');

slides[0].style.display = 'block';

flecheDroite.addEventListener("click", function(){
  i++;
  if(i>slides.length - 1){
    slides.forEach(element =>{
      element.style.display = "none";
    })
    i = 0;
    slides[i].style.display = "block";
  }
  else {
    slides.forEach(element => {
      element.style.display = "none";
    })
    slides[i].style.display = "block";
  }
})

flecheGauche.addEventListener('click', function(){
  i--;
  if(i < 0){
    slides.forEach(element => {
      element.style.display = 'none';
    })
    i = slides.length -1;
    slides[i].style.display = 'block';
  }
  else {
    slides.forEach(element => {
      element.style.display ='none';
    })
    slides[i].style.display = 'block';
  }
})