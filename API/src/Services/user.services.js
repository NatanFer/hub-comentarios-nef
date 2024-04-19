const db = require("../db_connect");

const UserService = {
  getDBUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  getDBUserById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE id =?", [id], (error, result) => {
        if (error) {
          reject(error.message);
        }
        if (result.length > 0) {
          resolve(result);
        }
      });
    });
  },
};
module.exports = UserService;

// server.get("/user", (req, res) => {
//     db.query("SELECT * FROM user", (err, result) => {
//       if (err) {
//         res.status(500).json({
//           success: false,
//           error: err,
//         });
//         return;
//       }
//       res.json({ success: true, comment: result });
//     });
//   });

// server.get("/user-comments/:userId", (req, res) => {
//   const  userId  = req.params.userId;

//   const queryByUser = `SELECT comment.id,
//   user.username as author,
//   firstname as firstname,
//   comment.comment_text,
//   comment.created_at,
//   comment.updated_at
//   FROM comment
//   INNER JOIN user ON comment.userId= user.id
//   WHERE userId = (?)
//   ORDER BY comment.updated_at DESC;`;

//   db.query(queryByUser, [userId], (err, result) => {
//     if (err) {
//       res.status(500).json({
//         success: false,
//         error: err,
//       });
//       return;
//     }
//     res.json({ success: true, comments: result });
//   });
// });
