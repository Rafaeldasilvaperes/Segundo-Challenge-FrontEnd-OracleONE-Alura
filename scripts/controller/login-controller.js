import encodeHTML from './input-sanitizer.js'
import { produtosService } from '../service/user-service.js'

const campoEmail = document.querySelector('[data-login-email]')
const campoSenha = document.querySelector('[data-login-senha]')
const campoSubmit = document.querySelector('[data-login-submit]')
const submitButton = document.querySelector('[data-login-submit-button]')
const alerta = document.querySelector('[data-alerta]')

campoSubmit.addEventListener('submit', function(evento){
  evento.preventDefault();
  
  let email = campoEmail.value.toLowerCase();
  let password = campoSenha.value;

  console.log("email: ",encodeHTML(email))
  console.log("PW: ",password)

  produtosService.logaUsuario(email, password).then((res) => {
    console.log(res.token)
    const userToken = res.token;
      if(userToken){
        submitButton.disabled = true;
        sessionStorage.setItem('JWT', userToken);
        console.log("userToken é: ", userToken)
        location.href = "produtos-home.html";
      }else{
        console.log(res)
        if(!alerta.classList.contains('active')){
          alerta.classList.add('active')
        }
        alerta.textContent = res.error;
      }
  })

  // if(loginEmail.toLowerCase() === campoEmail.value.toLowerCase() && loginSenha === campoSenha.value){
  //   sessionStorage.setItem('Admin', 'Logado')
  //   location.href = "produtos-home.html"
  // }else{
  //   campoEmail.value = 'Tente: "admin@hotmail.com" e Senha: "123123"'
  // }
  
})

