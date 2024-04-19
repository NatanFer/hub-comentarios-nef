const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require ('dotenv').config();  
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());



const CommentRouter = require('./src/Routes/comment.route');
server.use("/comment",  CommentRouter);

const UserRouter = require('./src/routes/UserRoute');
server.use('/user', UserRouter);

const LoginRouter = require('./src/routes/LoginRoute');
server.use('/session', LoginRouter);  

const PORT = 7000;

// server.get("/", (req, res) => {
//   res.send(`<h1>API DO SISTEMA DE HUB DE COEMNTARIOS</h1>
// <ul>
// <li><a href="http://localhost:7000/comment">Get de comentários</li>
// <li><a href="http://localhost:7000/user">Get de Usuarios</li>
// <li><a href="http://localhost:7000/user-comments/1">Get de comentários do usuario de id 1</li>
// </ul>`);
// });

// server.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   db.query(
//     "SELECT * FROM user WHERE username = ? AND password = ?",
//     [username, password],
//     (err, results) => {
//       if (err) {
//         res
//           .status(500)
//           .json({ success: false, error: "Internal server error" });
//         return;
//       }
//       if (results.length > 0) {
//         const { id, username, firstname, lastname } = results[0];
//         res.json({
//           success: true,
//           user: { id, username, firstname, lastname },
//         });
//       } else {
//         res.json({ success: false, error: "Usuário ou senha inválidos" });
//       }
//     }
//   );
// });

// server.get("/user", (req, res) => {
//   db.query("SELECT * FROM user", (err, result) => {
//     if (err) {
//       res.status(500).json({
//         success: false,
//         error: err,
//       });
//       return;
//     }
//     res.json({ success: true, comment: result });
//   });
// });

server.listen(PORT, () => {
  console.log(`O server está rodando em http:\\localhost:${PORT}`);
});
