let btnCriar = document.querySelector('#btnCriar');

btnCriar.addEventListener('click', (event) => {
  event.preventDefault();
  let frmAccount = document.querySelector('#frmAccount');
  let formData = [];
  formData.push(
    frmAccount.nome.value,
    frmAccount.email.value,
    frmAccount.login.value,
    frmAccount.senha.value
    )
  console.log(formData);
});