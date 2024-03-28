import { Comment } from "../models/comment.models.js";



const loadUserData = () => {};

const userDisplay = () => {
  const userContent = document.getElementById("userdata");
  userContent.innerHTML = ``;
  const divUser = document.createElement("div");
  divUser.className = "d-flex text-body-secondary pt-3 border-bottom";
  divUser.innerHTML = `
      <div id="userdata">
        <div class="container text-center">
            <div class="row">
                <div class="col shadow-lg">
                    <div class="comment-feed card shadow" id="login-form">
                        <h1>Dados Usuarios</h1>
                        <form id="formLogin">
                            <ul class="list-group">
                                <li class="list-group-item active" aria-current="true">Nome do Usuarios</li>
                                <li class="list-group-item"></li>
                                <ul class="list-group">
                                    <li class="list-group-item active" aria-current="true">Senha</li>
                                    <li class="list-group-item">.....</li>
                            <button type="submit" class="btn btn-dark my-2">Enviar</button>
                        </form>
                    </div>
    </div>
              `;
  userContent.append(divUser);
};
export {userDisplay};
