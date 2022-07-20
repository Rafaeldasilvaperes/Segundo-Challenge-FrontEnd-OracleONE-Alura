
export function criaPaginaProduto(){
  const item = document.querySelector('[data-produto]')
  const produto = JSON.parse(localStorage.getItem('produto'))
  document.title = produto.name

  const produtoTemplate = 
  `
          <div class="produto__container">
            <img src="${".."+produto.image}" alt="${produto.alt}" class="produto__img">
            <div class="produto__descricao">
              <h2 class="produto__descricao__titulo">${produto.name}</h2>
              <h3 class="produto__descricao__subtitulo">R$ ${produto.price}</h3>
              <h4 class="produto__descricao__texto">${produto.description}</h4>
            </div>
        </div> 

  `

  return item.innerHTML = produtoTemplate
}

criaPaginaProduto()