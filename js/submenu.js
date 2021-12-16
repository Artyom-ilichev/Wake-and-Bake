let mainMenu = document.querySelector(".home")
let subMenu = document.querySelector(".submenu-block")

mainMenu.addEventListener("mouseenter", showSub, false)
subMenu.addEventListener("click", hideSub, false)

function showSub(e) {
  subMenu.style.height = "auto"
  subMenu.style.overflow = "visible"
  subMenu.style.opacity = "1"
}

function hideSub(e) {
  subMenu.style.height = "0px"
  subMenu.style.overflow = "hidden"
  subMenu.style.opacity = "0"
}
