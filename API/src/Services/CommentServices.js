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