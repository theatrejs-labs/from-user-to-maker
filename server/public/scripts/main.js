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
    socket.emit('controller', { type: 'command', command })
}

next.onmousedown = next.ontouchstart = () => {
    reset()
    window.navigator.vibrate(20);
    next.classList.add('hover')
    timeout = setTimeout(() => { action('next') }, 1000)
}

prev.onmousedown = prev.ontouchstart = () => {
    reset()
    window.navigator.vibrate([20, 50, 20]);
    prev.classList.add('hover')
    timeout = setTimeout(() => { action('prev') }, 1000)
}

next.onmouseup = next.ontouchend = prev.onmouseup = prev.ontouchend = () => {
    reset()
}