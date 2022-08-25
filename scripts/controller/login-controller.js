const campoEmail = document.querySelector('[data-login-email]')
const campoSenha = document.querySelector('[data-login-senha]')
const campoSubmit = document.querySelector('[data-login-submit]')

campoSubmit.addEventListener('submit', function(evento){
  evento.preventDefault();
  console.log("Logou");
  let loginEmail = "admin@hotmail.com"
  let loginSenha = "123123"

  if(loginEmail === campoEmail.value && loginSenha === campoSenha.value){
    sessionStorage.setItem('Admin', 'Logado')
    location.href = "produtos-home.html"
  }else{
    campoSubmit.reset();
  }
  
})

