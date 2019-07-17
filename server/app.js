const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, './views'))
app.use(express.static(path.resolve(__dirname, './public')))

server.listen(process.env.PORT || 3001)

app.get('/remote', function(req, res){
   res.render("control");
});

io.on('connection', function (socket) {
    let allowedToSendCommands = false
    socket.on('controller', (data) => {
        if (data.type === 'register') {
            allowedToSendCommands = data.code === '123456';
        }
        else if (allowedToSendCommands) {
            if (data.type === 'controller-ready') {
                io.emit('remote-control', { type: 'controller-ready' })
            }
        }
    })
    socket.on('remote-control', (data) => {
        if (data.type === 'presentation-ready') {
            io.emit('controller', { type: 'presentation-ready' })
        }
    })
    socket.emit('remote-control', { type: 'command', message: 'prev' })
});