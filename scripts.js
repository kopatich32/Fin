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
let hamburgerButton = document.querySelector('.hamburger_menu')
let verticalMenu = document.querySelector('header')
let cross = document.querySelector('.cross')
cross.onclick = function(){
        verticalMenu.style.left = '-70%';

}

hamburgerButton.addEventListener('click', function(event){
    let has = hamburgerButton.classList.toggle('choose')
    if(has) { verticalMenu.style.left = '0px'
        hamburgerButton.classList.remove('choose')
    }else{
        verticalMenu.style.left = ''
    }
    event.stopPropagation()
})

document.addEventListener('click', notMenu)
function notMenu(e){
    if(!verticalMenu.contains(e.target)){
        verticalMenu.style.left = null
    }
}
