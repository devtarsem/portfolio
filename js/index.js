const menu_opener = document.querySelector('.icon-menu')
const menu_container = document.querySelector('.menu-container')
const menu_close = document.querySelector('.icon-close')
menu_opener.addEventListener('click', e=>{
    e.preventDefault()
    menu_container.style.right = '2rem'
    menu_container.style.transition = 'all 1s'
    menu_close.style.display = 'block'
    menu_opener.style.display = 'none'

})

menu_close.addEventListener('click', e=>{
    e.preventDefault()
    menu_container.style.right = '-100%'
    menu_container.style.transition = 'all 1s'
    menu_close.style.display = 'none'
    menu_opener.style.display = 'block'
})
