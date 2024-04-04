const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(bodyParser.json());

const PORT = 7000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) return console.log(err);
  console.log("Conectado com sucesso!");
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ success: false, error: "Internal server error" });
        return;
      }
      if (results.length > 0) {
        const { id, username, firstname, lastname } = results[0];
        res.json({
          success: true,
          user: { id, username, firstname, lastname },
        });
      } else {
        res.json({ success: false, error: "Usuário ou senha inválidos" });
      }
    }
  );
});

server.get("/comment", (req, res) => {
  const queryByUser = `SELECT comment.id,
  user.username as author,
  comment.comment_text,
  comment.created_at,
  comment.updated_at
  FROM comment
  INNER JOIN user ON comment.userId= user.id
  ORDER BY comment.updated_at DESC;`;

  db.query(queryByUser, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
      return;
    }
    res.json({ success: true, comment: result });
  });
});
//add comentario

server.post("/comment", (req, res) => {
  const { userId, comment_text } = req.body;
  db.query(
    "INSERT INTO comment (userId, comment_text) VALUES (?,?)",
    [userId, comment_text],
    (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          error: "internal server error",
        });
        return;
      }
      res.json({ success: true });
    }
  );
});

server.get("/user", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
      return;
    }
    res.json({ success: true, comment: result });
  });
});

server.post("/user-comments/:userId", (req, res) => {
  const  userId  = req.params.userId;

  const queryByUser = `SELECT comment.id,
  user.username as author,
  firstname as firstname,
  comment.comment_text,
  comment.created_at,
  comment.updated_at
  FROM comment
  INNER JOIN user ON comment.userId= user.id
  WHERE userId = (?)
  ORDER BY comment.updated_at DESC;`;

  db.query(queryByUser, [userId], (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
      return;
    }
    res.json({ success: true, comments: result });
  });
});

server.listen(PORT, () => {
  console.log(`O server está rodando em http:\\localhost:${PORT}`);
});
