import ApiUser from "./api/connector";
import User from "./model/user";

const api = new ApiUser();

const formLogin = document.querySelector('#frmLogin');
const buttonLogin = document.querySelector('#btnLogin');


buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();

  const user = new User(
    "",
    formLogin.login.value,
    formLogin.senha.value,
    "",
  )

  api.validateUserLogin(user);
})