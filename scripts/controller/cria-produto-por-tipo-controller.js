import { produtosService } from '../service/cliente-service.js'
import { itemClicado } from './conteudo-dinamico-produto.js'


export function criadorProdutosTiposPrincipais(objeto, stringDotsPath){
  const item = document.createElement('li')

  const produtoTemplate = 
  `
          <article class="produtos__article">
            <a href="./views/produtos-produto.html" class="produtos__item" data-produto>
              <img src="${stringDotsPath+objeto.image}" alt class="produtos__item_imagem">
              <h3 class="produtos__item_titulo" data-name>${objeto.name}</h3>
              <h4 class="produtos__item_preco">R$ ${objeto.price}</h4>
              <a href="./views/produtos-produto.html" class="produtos__item_link_ver_mais">Ver produto</a>
            </a>
          </article>

  `
  item.innerHTML = produtoTemplate;
  item.addEventListener("click", itemClicado)

  return item
}


function filtraProdutoPorCategoria(type, elemento){

  const dataTipos = document.querySelectorAll(`[data-produtos]`)
  
  dataTipos.forEach(ul =>  {
    if(ul.getAttribute("data-produtos") == type){
      return ul.appendChild(criadorProdutosTiposPrincipais(elemento, "../.."))
    }
  }
  )
}

export function appendProdutosPorTipo(){
  produtosService.listaProdutos()
  .then(data => {
      data.products.forEach(elemento => {
        filtraProdutoPorCategoria(elemento.type, elemento)
    });
  })
}

appendProdutosPorTipo();

