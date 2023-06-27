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
let verticalMenu = document.querySelector('.links')
let cross = document.querySelector('.cross')
hamburgerButton.addEventListener('click', function(event){
verticalMenu.style.left = '0'
// hamburgerButton.style.display = 'none'
// setTimeout(function(){
//     cross.style.display = 'block'
// },900)
})
cross.onclick = function(event){
    verticalMenu.style.left = '-70%';
    // cross.style.display = 'none'
    // hamburgerButton.style.display = 'block'
}
