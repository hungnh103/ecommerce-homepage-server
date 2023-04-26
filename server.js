const jsonServer = require("json-server");
const cors = require('cors'); 

const server = jsonServer.create();
server.use(cors({credentials: true, origin: 'https://ecommerce-homepage.vercel.app'}));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const router = jsonServer.router("api/db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
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
