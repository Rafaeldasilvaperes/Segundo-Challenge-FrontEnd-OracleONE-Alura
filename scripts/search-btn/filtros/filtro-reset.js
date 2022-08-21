export function resetaFiltros(){
  const todos = document.querySelector('[data-filtra-completo]')
  todos.addEventListener('click', function(){
    let produtos = document.querySelectorAll('[data-produto]')
    produtos.forEach(produto =>{
      produto.closest('li').classList.remove('produto__invisivel')
    })
  })

}