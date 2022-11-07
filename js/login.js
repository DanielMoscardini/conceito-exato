let btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();

  let frmLogin = document.querySelector('#frmLogin');
  let formData = [];
  formData.push(
    frmLogin.login.value,
    frmLogin.senha.value
    )
  console.log(formData);

})