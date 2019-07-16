const $ = q => document.querySelector(q)

const socket = window.io.connect('/')

const status = $('.status')
let paired = false
let pairingTimeout = null
const checkPairTimeout = 2000
const checkPairAccuracy = 2000
let pairInterval = null

socket.on('connect', () => {
    clearInterval(pairInterval)
    socket.emit('controller', { type: 'register', code: '123456' })
    pairInterval = setInterval(() => {
        socket.emit('controller', { type: 'controller-ready' })
    }, checkPairTimeout)
})
socket.on('controller', (data) => {
    if (data.type === 'presentation-ready') {
        clearTimeout(pairingTimeout)
        paired = true
        status.classList.add('connected')
        pairingTimeout = setTimeout(() => {
            paired = false
            status.classList.remove('connected')
        }, checkPairTimeout + checkPairAccuracy)
    }
})

const next = $('.next')
const prev = $('.prev')

let timeout = null
const reset = () => {
    clearTimeout(timeout)
    next.classList.remove('hover')
    prev.classList.remove('hover')
}

const action = (command) => {
    window.navigator.vibrate(200);
    console.log(command)
}

next.onmousedown = next.ontouchstart = () => {
    reset()
    next.classList.add('hover')
    timeout = setTimeout(() => { action('next') }, 1000)
}

prev.onmousedown = prev.ontouchstart = () => {
    reset()
    prev.classList.add('hover')
    timeout = setTimeout(() => { action('prev') }, 1000)
}

next.onmouseup = next.ontouchend = prev.onmouseup = prev.ontouchend = () => {
    reset()
}