import { produtosService } from '../service/cliente-service.js'

export function criadorDeProdutoPaginaFiltros(objeto){

  const item = document.createElement('li')

  const produtoTemplate = 
  `
  <article class="produtos__article">
    <a href="./produtos-produto.html?id=${objeto.id}" class="produtos__item" data-produto>
      <img src="${objeto.image}" alt="${objeto.alt}" class="produtos__item_imagem">
      <hr>
      <h3 class="produtos__item_titulo produtos__item_titulo--all" data-name>${objeto.name}</h3>
      <h4 class="produtos__item_preco">R$ ${objeto.price}</h4>
      <div href="./produtos-produto.html?id=${objeto.id}" class="produtos__item_link_ver_mais">Ver produtos</div>
    </a>
  </article>
`

  item.innerHTML = produtoTemplate;
  return item

}

function appendTodosProdutosPaginaFiltros(){

  const tabela = document.querySelector('[data-lista-de-produtos]')

  produtosService.listaProdutos()
  .then(data => {
      data.forEach(elemento => {
      tabela.appendChild(criadorDeProdutoPaginaFiltros(elemento))
    });
  })
}

appendTodosProdutosPaginaFiltros()