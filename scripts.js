//Anchor animation

let arrow = document.querySelector('a[href*="#"]')
    arrow.addEventListener('click', function(event){
    event.preventDefault();
    let blockID = arrow.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
})

// Hamburger Menu
let wrapperBurger = document.querySelector('.menu')
let hamburgerButton = document.querySelector('.burger')
let verticalMenu = document.querySelector('header')

wrapperBurger.addEventListener('click', function(event){
    let has = hamburgerButton.classList.toggle('choose')
    if(has) { verticalMenu.style.left = '0px'
    }else{
        verticalMenu.style.left = ''
    }
    event.stopPropagation()
})

document.addEventListener('click', notMenu)
function notMenu(e){
    if(!verticalMenu.contains(e.target)){
        verticalMenu.style.left = null
        hamburgerButton.classList.remove('choose')
    }
}
