//Anchor animation

export default function anchor(event){
        event.preventDefault();
        document.querySelector('#top').scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
}
