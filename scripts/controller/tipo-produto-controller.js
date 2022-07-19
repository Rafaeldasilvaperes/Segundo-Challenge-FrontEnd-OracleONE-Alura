
import { produtosService } from '../service/cliente-service.js'


function criadorProdutosTiposPrincipais(objeto){
  const item = document.createElement('li')

  const produtoTemplate = 
  `
          <article class="produtos__article">
            <a href="./views/produtos-produto.html" class="produtos__item">
              <img src="${"."+objeto.image}" alt class="produtos__item_imagem">
              <h3 class="produtos__item_titulo">${objeto.name}</h3>
              <h4 class="produtos__item_preco">R$ ${objeto.price}</h4>
              <a href="./views/produtos-produto.html" class="produtos__item_link_ver_mais">Ver produto</a>
            </a>
          </article>

  `
  item.innerHTML = produtoTemplate;
  return item
}


export function filtraProdutoPorCategoria(type, elemento){

  const dataTipos = document.querySelectorAll(`[data-produtos]`)
  
  dataTipos.forEach(ul =>  {
    if(ul.getAttribute("data-produtos") == type){
      // console.log(ul)
      return ul.appendChild(criadorProdutosTiposPrincipais(elemento))
    }else{
      return
    }
  }
  )
}

export function appendProdutosPorTipo(){
  produtosService.listaProdutos()
  .then(data => {
      data.forEach(elemento => {
        filtraProdutoPorCategoria(elemento.type, elemento)
    });
  })
}
appendProdutosPorTipo();

