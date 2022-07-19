import { produtosService } from '../service/cliente-service.js'

export function criadorDeProduto(objeto){
  
  const item = document.createElement('li')

  const produtoTemplate = 
  `
  <article class="produtos__article">
              <img src="${objeto.image}" alt="${objeto.alt}" class="produtos__item_imagem">
              <div class="produtos__item_btns_container">
                <button class="produtos__item_edit_btn"><img src="../img/delete-icon.svg" alt="Deletar Produto"></button>
                <button class="produtos__item_edit_btn"><img src="../img/edit-icon.svg" alt="Editar Produto"></button>
              </div>
              <h2 class="produtos__item_titulo">${objeto.name}</h2>
              <h3 class="produtos__item_preco">R$ ${objeto.price}</h3>
              <a href="#" class="produtos__item_link_ver_mais">#${objeto.id}</a>
          </article>

  `
  item.innerHTML = produtoTemplate;
  return item
}

const tabela = document.querySelector('[data-produtos-todos]')

produtosService.listaProdutos()
  .then(data => {
      data.forEach(elemento => {
      tabela.appendChild(criadorDeProduto(elemento))
    });
  })
  // Lembrar que o objeto json dentro da promise que vem do github está um caminho a dentro da promise, então use data.products e não só data.
  // data.products.forEach(elemento =>