
export function criadorProdutosTiposPrincipais(objeto, _id, stringDotsPath){
  const item = document.createElement('li')
  item.classList.add('produtos__container_lista')
  
  const produtoTemplate = 
  `
          <article class="produtos__article">            
            <a href="${stringDotsPath}/views/produtos-produto.html?id=${_id}" class="produtos__item" data-produto>
              <img src="${objeto.productImage}" alt class="produtos__item_imagem">
              <h3 class="produtos__item_titulo" data-name>${objeto.productName}</h3>
              <h4 class="produtos__item_preco">R$ ${objeto.productPrice}</h4>
              <a href="${stringDotsPath}/views/produtos-produto.html?id=${_id}" class="produtos__item_link_ver_mais">Ver produto</a>
            </a>
          </article>

  `
  
  item.innerHTML = produtoTemplate;

  return item
}



