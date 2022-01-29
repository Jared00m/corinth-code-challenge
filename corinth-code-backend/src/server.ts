import http from 'http';
import app from './app';

const port = Number(process.env.PORT) | 3000;

const server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
    console.log('Listening on port ' + port);
});

server.on('error', (error) => {
    console.log('Error on server: ', error);
})