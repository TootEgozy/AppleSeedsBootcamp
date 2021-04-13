const http = require('http');
const fs = require('fs');
var url = require('url');


const dataBuffer = fs.readFileSync("users.json");
const dataJSON = dataBuffer.toString();
const users = JSON.parse(dataJSON);

function handler(req, res) {
    const parsedUrl =url.parse(req.url, true);
    if(parsedUrl.pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    else if(parsedUrl.pathname === '/raw-html') {
            res.write('<h1>Welcome</h1>');
    }
    else if(parsedUrl.pathname === '/users') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(`${users.map(user=>`<p>${user.name}</p>`)}`);
    }

    
}



const server = http.createServer(handler);
server.listen(3000);

// http.createServer((req,res)=> {
//     res.write("Hello!");
//     res.end();
// }).listen(3000)