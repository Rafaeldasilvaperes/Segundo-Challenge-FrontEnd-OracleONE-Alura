const campoEmail = document.querySelector('[data-login-email]')
const campoSenha = document.querySelector('[data-login-senha]')
const campoSubmit = document.querySelector('[data-login-submit]')

campoSubmit.addEventListener('submit', function(evento){
  evento.preventDefault();
  console.log("Logou");
  let loginEmail = "admin@hotmail.com"
  let loginSenha = "123123"

  if(loginEmail.toLowerCase() === campoEmail.value.toLowerCase() && loginSenha === campoSenha.value){
    sessionStorage.setItem('Admin', 'Logado')
    location.href = "produtos-home.html"
  }else{
    campoEmail.value = 'Tente: "admin@hotmail.com" e Senha: "123123"'
  }
  
})

