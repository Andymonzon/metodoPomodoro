const darkMode = document.querySelector('.containerMode--dark-mode')
const lightMode = document.querySelector('.containerMode--light-mode')
const containertime = document.querySelector('.container--time-start')
const logo = document.querySelector('.nav--logo')
const settingsbtn = document.querySelector('.settings--btn')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
let btnIniciar = document.querySelector('#btn-iniciar')
let btnPausar = document.querySelector('#btn-pausar')
let btnDetener = document.querySelector('#btn-detener')
const timerTxt = document.querySelector('.timer')
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
    btnIniciar.classList.add('fondo--dark')
    btnDetener.classList.add('fondo--dark')
    btnPausar.classList.add('fondo--dark')
    timerTxt.classList.add('dark--color')
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
    btnIniciar.classList.remove('fondo--dark')
    btnDetener.classList.remove('fondo--dark')
    btnPausar.classList.remove('fondo--dark')
    timerTxt.classList.remove('dark--color')
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

inp1.addEventListener('keyup', (e)=>{
    timerTxt.innerHTML= e.target.value + ':' + '00'
})

window.onload = () => {
    // pomodoro
    let workTime;
    let breakTime;
    let restTime;
    let timesCompleted;
    let cyclesGoal;
    let cyclesCompleted = 0

    function pomodoroController(){
        if(isRestTime()){
            cyclesCompleted++
            if(!goalReachead()){
                currentTime = restTime
                timer()
                timesCompleted = 0
            }else{
                console.log('pomodoro finished!')
            }
            return
        }

        if(timesCompleted % 2 == 0){
            currentTime = workTime 
            timesCompleted++
            timer()
            console.log('time to work! tc:' + timesCompleted)
        } else {
            currentTime = breakTime
            timesCompleted++
            timer()
            console.log('time to break! tc:' + timesCompleted)
        }
        
        
    }

    function goalReachead(){
        return cyclesGoal == cyclesCompleted
    }

    // longbreak
    function isRestTime() {
        return timesCompleted == 7
    }

    // frontend
    
    // button functionality
    btnIniciar.onclick=()=>{
        populateVariables()
        startPomodoro()
        btnIniciar.style.display='none'
        btnPausar.style.display='block'
        btnDetener.style.display='block'
        
    }

    function startPomodoro() {
        console.log('started pomodoro')
        pomodoroController()
    }

    function populateVariables() {
        console.log('populated variables')
        if(!pausarTemporizador()){
            workTime = inp1.value
        }else{
            workTime = acc
        }
        breakTime = inp2.value
        restTime = inp3.value
        cyclesGoal = inp4.value
        timesCompleted = 0
    }

    // clock
    let clockMinutes;
    let clockSeconds;

    function updateClock() {
        clockMinutes = formatNumbers(currentTime)
        clockSeconds = formatNumbers(seconds)
        timerTxt.innerHTML = clockMinutes + ':' + clockSeconds
    }

    function formatNumbers(time){
        let formatteDigits
        if(time < 10){
            formatteDigits = '0' + time
        } else {
            formatteDigits = time
        }
        return formatteDigits
    }
    
    // timer
    let currentTime;
    let seconds = 0
    let acc;
    function timer() {
        let tiempo;
        if(currentTime > 0 || seconds > 0){
            if(seconds == 0){
                seconds = 59
                currentTime--
            } else{
                seconds--
            }
            updateClock()
            console.log(currentTime, seconds)
            tiempo = setTimeout(timer,1000)
        } else{
            pomodoroController()
            // console.log('el temporizador termino')
        }
        btnPausar.onclick=()=>{clearTimeout(tiempo),pausarTemporizador()}
    }
    function pausarTemporizador(){
        btnPausar.style.display= 'none'
        btnDetener.style.display= 'none'
        btnIniciar.style.display = 'block'
        acc = currentTime
        return acc
    }

}
