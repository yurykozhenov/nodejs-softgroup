const http = require('http');
const url = require('url');
const qs = require('querystring');
const { Database } = require('./db');
const db = new Database();

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    const queryParams = qs.parse(query);

    if (pathname === '/gallery') { 
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });

            const item = db.read(queryParams.id);

            if (!item) {
                res.writeHead(404);
                res.end();
            } else {
                res.end(JSON.stringify(item));
            }
        } else if (req.method === 'POST') {
            let body = [];

            req.on('data', (chunk) => {
                body.push(chunk);
            });

            req.on('end', function () {
                body = Buffer.concat(body).toString();
                console.log(body);

                db.write(body);

                res.writeHead(201, { 'Content-Type': 'text/plain' });
                res.end('Saved!');
            });
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
        <html>
            <body>
                <h1>404</h1>
                <h2>Page not found!</h2>
            </body>
        </html>`);
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Listening!');
});
