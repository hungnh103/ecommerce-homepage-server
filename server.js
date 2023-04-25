const jsonServer = require("json-server");
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("api/db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(3000, () => {
 console.log("JSON Server is running");
});

module.exports = server;
