import { produtosService } from '../service/user-service.js'

const campoEmail = document.querySelector('[data-cadastro-email]')
const campoSenha = document.querySelector('[data-cadastro-senha]')
const campoSenhaConfirmacao = document.querySelector('[data-cadastro-senha2]')
const campoSubmit = document.querySelector('[data-cadastro-submit2]')
const submitButton = document.querySelector('[data-cadastro-submit]')
const alerta = document.querySelector('[data-alerta]')

campoSubmit.addEventListener('submit', function(evento){
  evento.preventDefault();
  

  console.log("Logou");
  let email = campoEmail.value;
  let password = campoSenha.value;
  let confirmPassword = campoSenhaConfirmacao.value;
  console.log(email)

  produtosService.registraUsuario(email, password, confirmPassword)
    .then((res) => {
      console.log(res)
      const userEmail = res.newUser;
      if(userEmail){
        submitButton.disabled = true;
        console.log("User Email é: ", userEmail)
        window.location.href = `../views/cadastrar-cadastrado.html?user=${userEmail}`;
      }else{
        console.log(res)
        if(!alerta.classList.contains('active')){
          alerta.classList.add('active')
        }
        alerta.textContent = res.error;
      }
      
    })
})


