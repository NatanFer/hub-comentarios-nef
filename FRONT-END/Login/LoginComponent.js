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

handleShowHide();   
}).catch(error => {
        alert(`Login invalido. Erro:${error.message}`)
    })
    console.log(user)
}



const LoginComponent = {
    run: () => {
        const formLogin = document.getElementById('formLogin');
        formLogin.addEventListener("submit", handleLogin);
    }
}
export { LoginComponent }

const formLogin = document.getElementById('formLogin');
formLogin.addEventListener("submit", handleLogin);