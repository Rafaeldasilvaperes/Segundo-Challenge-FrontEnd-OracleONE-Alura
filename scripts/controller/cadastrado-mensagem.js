
const item = document.querySelector('[data-user-cadastrado]')
const pegaURL = new URL(window.location)
const user = pegaURL.searchParams.get('user')

const mensagemTemplate = `
      <div class="cadastrado_container">
        <h1 class="cadastrado_texto"><strong>${user}</strong> foi cadastrado com sucesso!</h1>
        <img class="cadastrado_imagem" src="../img/done-svg.svg" alt="">
      </div>
`

item.innerHTML = mensagemTemplate