const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navLinks')


window.addEventListener('scroll',() => {
    if(this.scrollY>100){
        navbar.classList.add('scrolled')
    } else{
        navbar.classList.remove('scrolled')
    }
})
hamburger.addEventListener('click', () =>{
    navLinks.classList.add('active')
    hamburger.classList.add('active')
})

// hamburger.addEventListener('click',() => {
//   navLinks.classList.toggle('active');
//   hamburger.classList.toggle('active');
// })

// typed.js

// var option = {
//     string :[
//         'Innovate Create Thrive',
//         'Elevating Digital Futures'
//     ],
//     typespeed: 40,
//     loop: true,
//     loopCount: Infinity,
// }
 
// var typed = new Typed('#hero-titles','options');

