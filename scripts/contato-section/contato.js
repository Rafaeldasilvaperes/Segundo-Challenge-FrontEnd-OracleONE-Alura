export function CONTATOSectionGenerator(){
  const contatoSection = document.querySelector('[data-section-contatos]')
  const caminhoIndex = "./index.html"
 
  const caminhoViews = "../index.html"
  const caminhoLogoIndex = "./img/alura_geek_logo.png"
  const caminhoLogoViews = "../img/alura_geek_logo.png"

  const URLAtual = window.location.href.includes("views")

  console.log("ESTÁ!")

  contatoSection.innerHTML = `
  <nav aria-label="secundário">
        <ul class="contatos__container">
          <li class="contatos__item">
            <a href=${ URLAtual ? caminhoViews : caminhoIndex}>
              <img src=${ URLAtual ? caminhoLogoViews : caminhoLogoIndex} alt="Ilustração de fones de ouvido seguido do texto Alura Music. Logotipo" class="contatos__imagem">
            </a>
          </li>

          <li class="contatos__item">
            <ul class="contatos__item_ul">
              <li class="contatos__item_ul_li"><a href="#">Quem somos nós</a></li>
              <li class="contatos__item_ul_li"><a href="#">Política de privacidade</a></li>
              <li class="contatos__item_ul_li"><a href="#">Programa fidelidade</a></li>
              <li class="contatos__item_ul_li"><a href="#">Nossas lojas</a></li>
              <li class="contatos__item_ul_li"><a href="#">Quero ser franqueado</a></li>
              <li class="contatos__item_ul_li"><a href="#">Anuncie aqui</a></li>
            </ul>
          </li>

          <li class="contatos__item">
            <form action="">
              <fieldset>
                <legend><h2 class="contatos__item_titulo_form">Fale conosco</h2></legend>
                <div class="contatos__item_input_container">
                  <input class="input" name="nome" id="nome" type="text" placeholder="Nome" required>
                  <label class="input-label" for="nome">Nome: </label>
                </div>

                <label aria-label="Escreva sua Mensagem" for="contatoMensagem"></label>
                <textarea class="textarea" name="" id="contatoMensagem" placeholder="Escreva sua mensagem" rows="10" required></textarea>
                <div>
                  <input class="submit__btn" type="submit" value="Enviar mensagem">
                </div>
              </fieldset>
            </form>
          </li>
        </ul>
      </nav>
  `
}



