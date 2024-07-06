const menuBurger = document.querySelector('.menu-burger svg') ;
const closeButton = document.querySelector('.close svg')
const ul = document.querySelector('header ul') ;

menuBurger.addEventListener('click', (e) => {
  ul.classList.add('list-open') ;
})

closeButton.addEventListener('click', (e) => {
  ul.classList.remove('list-open')
})

ul.addEventListener('click', (e) => {
  if(ul.classList.contains('list-open')) {
    ul.classList.remove('list-open')
  }
})


const heroBg = document.querySelector('.hero-bg')
const heroGirl = document.querySelector('.hero-girl')

document.addEventListener('DOMContentLoaded', (e) => {
  animateHero()
})


function animateHero() {
  if(!heroBg.classList.contains('hero-initial')) {
    heroBg.classList.add('hero-initial')
  }

  if(!heroGirl.classList.contains('hero-initial')) {
    heroGirl.classList.add('hero-initial')
  }
}