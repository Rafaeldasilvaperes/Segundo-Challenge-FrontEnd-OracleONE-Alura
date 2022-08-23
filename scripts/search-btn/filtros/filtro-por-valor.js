export function filtroPorValor(){
  const filtrosOpcoes = document.querySelector('[data-filtro-preco]')
  const tags = filtrosOpcoes.getElementsByTagName('li')

  filtroResponsivo()
 
  Array.from(tags).forEach(elemento =>{
    if(elemento.getAttribute('data-valor-limite') === '100'){
      console.log("IT IS!")
    }
    
    elemento.addEventListener('click', function(){
      filtrarValores(this.getAttribute('data-valor-limite'));
    })
  })

  function filtrarValores(valorMax){
    let produtos = document.querySelectorAll('[data-produto]')
    console.log(valorMax)
    console.log(produtos)
    produtos.forEach(produto => {
      
      let produtoPrice = produto.querySelector('[data-price]')
      let preco = parseInt(produtoPrice.getAttribute('data-price'))
      let valorFiltro = parseInt(valorMax)
      console.log(preco, valorFiltro)
      if(preco <= valorFiltro && valorFiltro <= 1000){
        produto.closest('li').classList.remove('produto__invisivel')
        }else if(valorFiltro == 1001 && preco >= 1000){
          produto.closest('li').classList.remove('produto__invisivel')
        }else{
          produto.closest('li').classList.add('produto__invisivel')
        }
      
    })

  }
}

function filtroResponsivo(){
  const filtroAbrir = document.querySelector('[data-abrir-filtros]')
  filtroAbrir.addEventListener('click', function(){
    let showFiltros = document.querySelector('[data-mostrar-filtro]')
    showFiltros.classList.add('active')
  })
  const filtroFechar = document.querySelector('[data-fechar-filtros]')
  filtroFechar.addEventListener('click', function(){
    let showFiltros = document.querySelector('[data-mostrar-filtro]')
    showFiltros.classList.remove('active')
  })
  document.addEventListener('click', function(e){
      let showFiltros = document.querySelector('[data-mostrar-filtro]')
      if(e.target !== showFiltros && !showFiltros.contains(e.target) && e.target !== filtroAbrir){
        showFiltros.classList.remove('active')
      }
  })
}