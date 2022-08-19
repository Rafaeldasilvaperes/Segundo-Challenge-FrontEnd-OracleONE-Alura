export function filtroPorChar(){
  const inputPesquisar = document.querySelector('[data-header-search-bar]')
  const lupaPesquisar = document.querySelector('[data-header-search-btn]')

  lupaPesquisar.addEventListener('click', aposEnterOuClick);
  inputPesquisar.addEventListener('keypress', function(e){
    if (e.key === 'Enter' || e.key === 13){
      aposEnterOuClick();
    }
  });

  function aposEnterOuClick(){
    let produtos = document.querySelectorAll('[data-produto]')
    if(inputPesquisar.value.length > 0){
      produtos.forEach(produto =>{
        let expressao = new RegExp(inputPesquisar.value, "i")
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
}