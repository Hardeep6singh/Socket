const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);
    socket.emit('message', `Server received: ${data}`);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

const port = 3000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
