import io from 'socket.io-client'

const socket = io.connect('https://from-user-to-maker-server.herokuapp.com/')

export default socket