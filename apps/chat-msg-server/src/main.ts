import express = require('express');
const app = express();
import http = require('http');
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const port = 3333;

app.get('/', (req, res) => {
  res.send('server works');
});

// io.on triggers a sequence of actions when a connection arrives.
io.on('connection', (socket) => {
  console.log('user connected');

  // listen for chat message events and broadcast the received message to all sockets connected.
  socket.on('message ', (msg) => {
    console.log('message : ' + msg);
    // socket.broadcast.emit('message: ', msg);
    io.emit('message: ', msg);
  });

  socket.on('disconnected', () => {
    console.log('user disconnected');
  });
});

// Listen for connections.
server.listen(port, () => {
  console.log(`server port:  ${port} running`);
});
