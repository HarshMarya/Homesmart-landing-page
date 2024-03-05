import './style.css'

const navBtn = document.querySelector('#menu')
const menuBar = document.querySelector('#menuBar')

navBtn.addEventListener('click', ()=>{
    const isExpended = JSON.parse(navBtn.getAttribute('aria-expanded'))
    navBtn.setAttribute('aria-expanded', !isExpended);
    menuBar.classList.toggle('hidden')
    menuBar.classList.toggle('flex')
})