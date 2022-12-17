import { criadorProdutosTiposPrincipais } from "./cria-produto-por-tipo-controller.js"
import { produtosService } from '../service/cliente-service.js'

export function criaPaginaProduto(){
  const item = document.querySelector('[data-produto]')
  
  const pegaURL = new URL(window.location)
  const id = pegaURL.searchParams.get('id')

  produtosService.detalhaProduto(id)
  .then(produto => {
    produto.productImage = atob(produto.productImage)
    document.title = produto.productName
    const dataTipos = document.querySelector(`[data-produtos]`)
    dataTipos.dataset.produtos = `${produto.productType}`
   
    produtosRelacionados(produto.productType, dataTipos)
    
    const produtoTemplate = 
    `
            <div class="produto__container">
              <img src="${produto.productImage}" alt="${produto.productAlt}" class="produto__img">
              <div class="produto__descricao">
                <h2 class="produto__descricao__titulo">${produto.productName}</h2>
                <h3 class="produto__descricao__subtitulo">R$ ${produto.productPrice}</h3>
                <h4 class="produto__descricao__texto">${produto.productDesc}</h4>
              </div>
          </div> 
  
    `
    return item.innerHTML = produtoTemplate
  })
}

function produtosRelacionados(elementoType, ul){
  produtosService.listaProdutos()
  .then(data => {
      data.forEach(elemento => {
        elemento.productImage = atob(elemento.productImage)
        if(elemento.productType == elementoType){
          return ul.appendChild(criadorProdutosTiposPrincipais(elemento, elemento._id, ".."))
        }
    });
  })
}

criaPaginaProduto()