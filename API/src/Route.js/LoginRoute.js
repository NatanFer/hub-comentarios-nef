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