export function filtroPorChar(){
const inputPesquisar = document.querySelector('[data-header-search-bar]')

inputPesquisar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let produtos = document.querySelectorAll('[data-produto]')
      if(this.value.length > 0){
        produtos.forEach(produto =>{
          let expressao = new RegExp(this.value, "i")
          let produtoTitulo = produto.querySelector('[data-name]').textContent
          if(expressao.test(produtoTitulo)){
            produto.closest('li').classList.remove('produto__invisivel')
          }else{
            produto.closest('li').classList.add('produto__invisivel')
          }
        })
      }else{
        produtos.forEach(produto =>{
          produto.closest('li').classList.remove('produto__invisivel')
        })
      }
    }
  });
}