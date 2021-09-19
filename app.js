const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

const app = express();

app.use(connectLiveReload());

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'));
