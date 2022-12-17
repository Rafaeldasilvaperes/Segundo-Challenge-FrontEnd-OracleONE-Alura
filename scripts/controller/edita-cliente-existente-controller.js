import { produtosService } from "../service/cliente-service.js";
// import  pegaStringDaImagem  from "./adiciona-produto-novo-controller.js";

const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

// dealing with image
var uploaded_image = '';
const url = document.querySelector('[data-url]')
uploaded_image = url.addEventListener('change', pegaStringDaImagem)

// campos form
const img = document.querySelector('[data-span-imagem]')
const alt = document.querySelector('[data-alt]')
const tipo = document.querySelector('[data-tipo]')
const titulo = document.querySelector('[data-titulo]')
const preco = document.querySelector('[data-preco]')
const descricao = document.querySelector('[data-textarea-descricao]')


produtosService.detalhaProduto(id)
  .then(produto => {
    // automatically filling inputs with products informations to be edited
    document.title = `Editar | ${produto.productName}`
    img.style.backgroundImage = `url(${produto.productImage})`
    uploaded_image = `${produto.productImage}`
    alt.value = produto.productAlt
    tipo.value = produto.productType
    titulo.value = produto.productName
    preco.value = produto.productPrice
    descricao.value = produto.productDesc
    
  })

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento)=>{
  evento.preventDefault()
  produtosService.atualizaProduto(id, uploaded_image, alt.value, tipo.value, titulo.value, preco.value, descricao.value)
  .then(()=>{
    window.location.href = '../views/produtos-home.html'
  })
})

// this function creates a base64 image
function pegaStringDaImagem(){
  var previewImagem = document.querySelector('[data-span-imagem]')
  const reader = new FileReader();
  reader.addEventListener('load', () =>{
    uploaded_image = reader.result;
    previewImagem.style.backgroundImage = `url(${uploaded_image})`;

  })
  reader.readAsDataURL(this.files[0])
  
}