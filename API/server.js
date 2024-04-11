const USerRouter = require("./src/Route.js/UserRoute.js");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.user("/user", USerRouter);
const PORT = 7000;

server.get("/", (req, res) => {
  res.send(`<h1>API DO SISTEMA DE HUB DE COEMNTARIOS</h1>
<ul>
<li><a href="http://localhost:7000/comment">Get de comentários</li>
<li><a href="http://localhost:7000/user">Get de Usuarios</li>
<li><a href="http://localhost:7000/user-comments/1">Get de comentários do usuario de id 1</li>
</ul>`);
});


server.listen(PORT, () => {
  console.log(`O server está rodando em http:\\localhost:${PORT}`);
});
