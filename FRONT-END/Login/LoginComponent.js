import { User } from "../models/user.model.js";
import { LoginService } from "../services/login.services.js";
import { setInputComment} from "../Comment/CommentComponent.js";

const getLoginInputs = () => {
    return {
        username: document.getElementById('username'),
        password: document.getElementById('password')
    }
}


const handleShowHide = () => {
    const newCommentTag = document.getElementById('form-comentario');
    const loginTag = document.getElementById('login-form');
    if (newCommentTag.classList.contains('disabled')) {
        newCommentTag.classList.remove('disabled');
        loginTag.classList.add('disabled');
    } else {
        newCommentTag.classList.add('disabled');
        loginTag.classList.remove('disabled');
    }
}



const handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = getLoginInputs();

    const user = new User(null, username.value, password.value)
    console.log(user)
    LoginService.apiAuthUser(user).then(result => {
        console.log(result)
        user.setId(result.id);
        user.setFirstname(result.firstname);
        user.setLastname = (result.lastname);
        setInputComment(`${result.firstname} ${result.lastname}`,'');
        
const inputAuthor = document.getElementById('inputAuthor');
inputAuthor.value = result.firstname + ''+ result.lastname;
inputAuthor.disable=true;
inputAuthor.style.backgroundColor='#444';
inputAuthor.style.color = '#FFF'

const nav = document.getElementById('nav');
            const menuNav = document.createElement('div');
            menuNav.innerHTML = `
            <div class="container-fluid">
        <div class="navbar-brand" href="#">${username.value}</div> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Menu
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li id="dados"><a class="dropdown-item" href="#">Dados do usuario</a></li>
                      <li id="retorno"><a class="dropdown-item" href="#">Sair</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          
`;
            nav.append(menuNav);

handleShowHide();   
}).catch(error => {
        alert(`Login invalido. Erro:${error.message}`)
    })
    console.log(user)
}


const functButtom = () => {
  const menuUsuario = document.getElementById('user-data');
  menuUsuario.addEventListener();
}


const LoginComponent = {
    run: () => {
        const formLogin = document.getElementById('formLogin');
        formLogin.addEventListener("submit", handleLogin);
    }
}
export { LoginComponent, handleLogin }

const formLogin = document.getElementById('formLogin');
formLogin.addEventListener("submit", handleLogin);