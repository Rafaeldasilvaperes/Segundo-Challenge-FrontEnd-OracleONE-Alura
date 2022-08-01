import { produtosService } from "../service/cliente-service.js";
// import  pegaStringDaImagem  from "./adiciona-produto-novo-controller.js";

const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

// dealing with image
var uploaded_image = '';
const url = document.querySelector('[data-url]')
uploaded_image = url.addEventListener('change', pegaStringDaImagem)

// campos form
// const img = document.querySelector('[data-url]')
const img = document.querySelector('[data-span-imagem]')
const alt = document.querySelector('[data-alt]')
const tipo = document.querySelector('[data-tipo]')
const titulo = document.querySelector('[data-titulo]')
const preco = document.querySelector('[data-preco]')
const descricao = document.querySelector('[data-textarea-descricao]')


produtosService.detalhaProduto(id)
  .then(produto => {
    document.title = `Editar | ${produto.name}`
    img.style.backgroundImage = `url(${produto.image})`
    uploaded_image = `${produto.image}`
    alt.value = produto.alt
    tipo.value = produto.type
    titulo.value = produto.name
    preco.value = produto.price
    descricao.value = produto.description
    
  })

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento)=>{
  evento.preventDefault()
  produtosService.atualizaProduto(id, uploaded_image, alt.value, tipo.value, titulo.value, preco.value, descricao.value)
  .then(()=>{
    window.location.href = '../views/produtos-home.html'
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