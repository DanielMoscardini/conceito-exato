import ApiUser from "./api/connector.js";
import User from "./model/user.js";

const api = new ApiUser();

const form = document.querySelector('#frmAccount');
const buttonCriar = document.querySelector('#btnCriar');


buttonCriar.addEventListener('click', (event) => {
  event.preventDefault();
  
  const user = new User(
    form.nome.value,
    form.login.value,
    form.senha.value,
    form.email.value
  )

  console.log(api.registerUser(user));
});