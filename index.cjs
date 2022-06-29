const http = require('http');
const hostname = 'localhost';
const port = 3000;
const dateMode = require('./moduledate.cjs')
const localMod = require('./localmode.cjs')
const person = require('./exportMod.cjs');
const newPerson = new person('NIKE', 'FERNANDEZ IGOP');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<h1> This is Home Page </h1>`);
        localMod.info('Node JS starting')

    } else if (req.url == '/fruitshop') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<h1> This is Fruitshop Page </h1>`);
        res.end('');

    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<h1> This is Admin Page </h1> <br> <h3>Name: ${newPerson.fullname()}`);

    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.write(`<h1> 404 error no page found! </h1>`);
        localMod.error('Node JS error')
    }
    res.end('');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});