// server kurmak ve bağlamak için
const express = require('express');
const cors = require('cors');
const http = require('http');//server oluşturabilmek için 
const {Server} = require('socket.io');

const app = express(); //express üzerinden bir app oluşturduk
app.use(cors()); //corstan kurtulması için içine cors koyuyoruz

const server = http.createServer(app); // bir server oluşturduk http üzerinden içinede app koyduk

const io = new Server(server,{
    cors: {
        origin: 'http://localhost:3000',
        methods:['GET','POST']
    }
})


io.on('connection', (socket) => {
console.log(socket.id)
})


const PORT = 5000;
server.listen(PORT, () =>{
    console.log('server is running on port: 5000')
})
