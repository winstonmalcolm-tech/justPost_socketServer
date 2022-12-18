const express = require('express');
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`)

    socket.on("send_comment", (data) => {
        console.log(data)
        socket.broadcast.emit("receive_comment", data)
    });
});

server.listen(3002, () => {
    console.log('listening on port:3002');
});
