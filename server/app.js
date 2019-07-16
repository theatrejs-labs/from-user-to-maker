const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, './views'))
app.use(express.static(path.resolve(__dirname, './public')))

server.listen(3001)

app.get('/remote', function(req, res){
   res.render("control");
});

io.on('connection', function (socket) {
    socket.emit('remote-control', { type: 'command', message: 'prev' })
});