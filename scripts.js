//Anchor animation

let arrow = document.querySelector('a[href="#top"]')
    arrow.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#top').scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
})

// Hamburger Menu
let wrapperBurger = document.querySelector('.menu')
let hamburgerButton = document.querySelector('.burger')
let verticalMenu = document.querySelector('header')


// document.addEventListener('click', function(event){
//     if(event.target.classList == 'hamburger' || event.target.classList == 'menu'){
//         let has = hamburgerButton.classList.toggle('choose')
//         if(has){
//             verticalMenu.style.left = '0'

//         }else{verticalMenu.style.left = '-70%'
//     }
//     }
// })

wrapperBurger.addEventListener('click', function(event){
    let has = hamburgerButton.classList.toggle('choose')
    if(has) { verticalMenu.style.left = '0px'
    }else{
        verticalMenu.style.left = ''
    }
    event.stopPropagation()
})

document.onclick = notMenu
function notMenu(e){
    if(!verticalMenu.contains(e.target)){
        verticalMenu.style.left = null
        hamburgerButton.classList.remove('choose')
    }
}

// Registration form
let form = document.forms.registration
let wrapperForm = document.querySelector('.registration_wrapper')
let accBtn = document.querySelector('.account')

document.addEventListener('click', (e)=>{
    if(accBtn.contains(e.target)){
        wrapperForm.style.display = 'block'
    }else if(!form.contains(e.target)){
        wrapperForm.style.display = 'none'
    }
})





