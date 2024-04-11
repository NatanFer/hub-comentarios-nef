const UserServices = require("../Services/UserServices.js");

const UserController = {
  getUser: (req, res) => {
    UserService.getUser()
      .then((result) => {
        resJSON({ sucess: true, user: result });
      })
      .catch((err) => {
        res.status(500).JSON({
          sucess: false,
          error: `Erro interno
            do servidor:${error}`,
        });
      });
  },
};

module.exports = UserController;
