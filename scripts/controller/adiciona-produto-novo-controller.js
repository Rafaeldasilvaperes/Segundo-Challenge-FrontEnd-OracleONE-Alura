import { produtosService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

var uploaded_image = '';
const url = document.querySelector('[data-url]')
uploaded_image = url.addEventListener('change', pegaStringDaImagem)

formulario.addEventListener('submit', (evento)=>{
  evento.preventDefault()

  const alt = evento.target.querySelector('[data-alt]').value
  const tipo = evento.target.querySelector('[data-tipo]').value
  const titulo = evento.target.querySelector('[data-titulo]').value
  const preco = evento.target.querySelector('[data-preco]').value
  const descricao = evento.target.querySelector('[data-textarea-descricao]').value

  produtosService.adicionaProduto(uploaded_image, alt, tipo, titulo, preco, descricao)
  .then(() => {
    window.location.href = '../views/produtos-home.html';
  })
})

function pegaStringDaImagem(){
  var previewImagem = document.querySelector('[data-span-imagem]')
  const reader = new FileReader();
  reader.addEventListener('load', () =>{
    uploaded_image = reader.result;
    previewImagem.style.backgroundImage = `url(${uploaded_image})`;

  })
  reader.readAsDataURL(this.files[0])
  
}


