import { LoginComponent, setSignedUser } from "./src/Components/login.component.js";
import { CommentComponent, loadComment } from "./src/Components/CommentComponent.js";
import { UserComponent } from "./src/Components/user.component.js";
import MainView from "./src/view/main.view.js";
import LoginService from "./src/services/login.services.js";


const main = {
    run: () => {
        MainView.build();
        LoginComponent.run();
        CommentComponent.run();
        UserComponent.run();
    }
}
window.onload = () => {
    main.run();
    if (LoginService.isLoggedIn()) {
        setSignedUser()
    }
    
}
document.addEventListener("DOMContentLoaded", () => {
    if (LoginService.isLoggedIn()) {
        setSignedUser();
    }
    loadComment();
})

window.addEventListener("load", () => {
    if (LoginService.isLoggedIn()) {
        setSignedUser();
    }
    loadComment();
})