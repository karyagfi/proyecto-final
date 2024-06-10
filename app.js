const mainNav = document.getElementById('main-nav')
const btnMenu = document.getElementById('btn-menu')

btnMenu.addEventListener('click', () => {
  mainNav.classList.toggle('hidden')
})