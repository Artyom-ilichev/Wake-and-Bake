let openPopupButton = document.querySelector('.open-popup')
let closePopupButton = document.querySelector('.close-popup')
let allPopupWindow = document.querySelector('.popup-bg')

openPopupButton.addEventListener('click', function() {
    allPopupWindow.style.display = 'block'
})

closePopupButton.addEventListener('click', function() {
    allPopupWindow.style.display = 'none'
})