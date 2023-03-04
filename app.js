const darkMode = document.querySelector('.containerMode--dark-mode')
const lightMode = document.querySelector('.containerMode--light-mode')
const containertime = document.querySelector('.container--time-start')
const logo = document.querySelector('.nav--logo')
const settingsbtn = document.querySelector('.settings--btn')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const timer = document.querySelector('.timer')
const containerSettingsOpen = document.querySelector('.container--settings-open')
const absoluto = document.querySelector('.absoluto')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
const inp3 = document.querySelector('.inp3')
const inp4 = document.querySelector('.long')
const btnClose = document.querySelector('.btn-close')


darkMode.addEventListener('click',()=>{
    darkMode.classList.add('desaparecer')
    lightMode.classList.add('aparecer')
    document.body.classList.add('fondo--dark-body')
    containertime.classList.add('fondo--dark-timer')
    logo.classList.add('dark--color')
    settingsbtn.classList.add('dark--color')
    btn1.classList.add('fondo--dark')
    btn2.classList.add('fondo--dark')
    btn3.classList.add('fondo--dark')
    btn4.classList.add('fondo--dark')
    btn5.classList.add('fondo--dark')
    timer.classList.add('dark--color')
    containerSettingsOpen.classList.add('fondo--dark-settings')
    inp1.classList.add('fondo--dark--settings-input')
    inp2.classList.add('fondo--dark--settings-input')
    inp3.classList.add('fondo--dark--settings-input')
    inp4.classList.add('fondo--dark--settings-input')
})

lightMode.addEventListener('click',()=>{
    darkMode.classList.remove('desaparecer')
    lightMode.classList.remove('aparecer')
    document.body.classList.remove('fondo--dark-body')
    containertime.classList.remove('fondo--dark-timer')
    logo.classList.remove('dark--color')
    settingsbtn.classList.remove('dark--color')
    btn1.classList.remove('fondo--dark')
    btn2.classList.remove('fondo--dark')
    btn3.classList.remove('fondo--dark')
    btn4.classList.remove('fondo--dark')
    btn5.classList.remove('fondo--dark')
    timer.classList.remove('dark--color')
    containerSettingsOpen.classList.remove('fondo--dark-settings')
    inp1.classList.remove('fondo--dark--settings-input')
    inp2.classList.remove('fondo--dark--settings-input')
    inp3.classList.remove('fondo--dark--settings-input')
    inp4.classList.remove('fondo--dark--settings-input')
})

settingsbtn.addEventListener('click',()=>{
    absoluto.classList.add('tarjetaAparecer')
})

btnClose.addEventListener('click',()=>{
    absoluto.classList.remove('tarjetaAparecer')
})

const minutos = ()=>{
    
}