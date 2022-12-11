import { produtosService } from "../service/cliente-service.js"
import { checaSessao } from './checa-se-esta-logado-controller.js'

checaSessao()


const formulario = document.querySelector('[data-form]')

var uploaded_image = '';
const url = document.querySelector('[data-url]')
uploaded_image = url.addEventListener('change', pegaStringDaImagem)
const precoMascara = document.querySelector('[data-preco]')
SimpleMaskMoney.setMask(preco, {
  prefix: 'R$ ',
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ',',
  thousandsSeparator: '.',
  cursor: 'end'
})

formulario.addEventListener('submit', (evento)=>{
  evento.preventDefault()

  const alt = evento.target.querySelector('[data-alt]').value
  const tipo = evento.target.querySelector('[data-tipo]').value
  const titulo = evento.target.querySelector('[data-titulo]').value
  const preco = SimpleMaskMoney.formatToNumber(precoMascara.value);
  const descricao = evento.target.querySelector('[data-textarea-descricao]').value
  
  const uploaded_image2 = btoa(uploaded_image)
  produtosService.adicionaProduto(uploaded_image2, alt, tipo, titulo, preco, descricao)
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


