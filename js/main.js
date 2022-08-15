const menu = document.querySelector("#menu");
const hamburgerButton = document.querySelector("#hamburger")
const closeMenuButton = document.querySelector("#btnMenuClose")

const btnCart = document.querySelector("#btn-cart")
const cart = document.querySelector("#cart")

hamburgerButton.addEventListener("click", onHamburgerClick )
closeMenuButton.addEventListener("click", onMenuClose)

btnCart.addEventListener("click", onCartToggle);

function onHamburgerClick() {
    menu.classList.remove('hidden')

}

function onMenuClose(){
    menu.classList.add("hidden")
}

function onCartToggle(){
    cart.classList.toggle("hidden")
} 

// const onHamburgerClick = () => {
//     menu.classList.remove('hidden')
// }

console.log('hola mundo');