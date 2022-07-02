const icon=document.querySelector('.icon')
const navLinks=document.querySelector('.nav-links')
const links=document.querySelectorAll('.nav-links li')

icon.addEventListener('click', ()=>{
    navLinks.classList.toggle('open')
    links.forEach(link=>{
        link.classList.toggle('fade')
    })
})