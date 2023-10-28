import * as express from 'express';
import { Server } from 'socket.io';
import * as http from 'http';

const port = 3000;

// creating instance of express, http & websocket
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// io.on triggers a sequence of actions when a connection arrives.
io.on('connection', (socket) => {
  console.log('user connected');

  // listen for chat message events and broadcast the received message to all sockets connected.
  socket.on('chat msg ', (msg) => {
    io.emit('chat msg: ', msg);
  });

  socket.on('disconnected', () => {
    console.log('user disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('server works');
});

// Listen for connections.
app.listen(port, () => {
  console.log(`server port:  ${port} running`);
});
