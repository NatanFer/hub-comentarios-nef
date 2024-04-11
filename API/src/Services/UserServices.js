const UserService = {
    getUsers:() =>{
    return new Promise((resolve, reject)=>{
        server.get("/user", (req, res) => {
                 db.query("SELECT * FROM user", (err, result) => {
                   if (error) {
                     reject(`Error ao buscar usuarios: ${err.message}`);
                     
                   }else{
                    resolve(result);
                   }
                   res.json({ success: true, comment: result });
                 });
               });
    })
}
}

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


//   server.get("/user-comments/:userId", (req, res) => {
//     const  userId  = req.params.userId;
  
//     const queryByUser = `SELECT comment.id,
//     user.username as author,
//     firstname as firstname,
//     comment.comment_text,
//     comment.created_at,
//     comment.updated_at
//     FROM comment
//     INNER JOIN user ON comment.userId= user.id
//     WHERE userId = (?)
//     ORDER BY comment.updated_at DESC;`;
  
//     db.query(queryByUser, [userId], (err, result) => {
//       if (err) {
//         res.status(500).json({
//           success: false,
//           error: err,
//         });
//         return;
//       }
//       res.json({ success: true, comments: result });
//     });
//   });