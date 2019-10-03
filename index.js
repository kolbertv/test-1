const http = require('http');
const PORT = process.env.PORT || 3000;

const GoogleNews = require('./models/googleNews');

let titles = null;
(async () => {
  titles = await new GoogleNews().getTitles();
})();

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    switch (url) {
      case '/': {
        res.setHeader('Cache-Control', 'max-age=300');
        res.writeHead(200);
        if (titles) {
          res.end(titles);
        } else {
          res.end(
            JSON.stringify({
              status: 200,
              message: 'Cannot get titles of news, please try again later'
            })
          );
        }
        break;
      }
      case '/ping': {
        res.writeHead(200);
        res.end(
          JSON.stringify({
            status: 200,
            message: 'Ok'
          })
        );
        break;
      }
      default: {
        res.writeHead(404);
        res.end(
          JSON.stringify({
            status: 404,
            message: 'Not found'
          })
        );
        break;
      }
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server started. Listening on: ${PORT}. Pid: ${process.pid}`);
});

module.exports = server;
