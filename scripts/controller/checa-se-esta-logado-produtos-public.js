export function checaSeEstaLogadoProdutosPublic(){
  const itemSessao = sessionStorage.getItem('JWT')
  
  document.addEventListener('DOMContentLoaded', function(){
    if(itemSessao && window.location.href.indexOf('produtos-todos-public-logado.html') == -1){
      this.location.href = "produtos-todos-public-logado.html"
    }else if(!itemSessao && window.location.href.indexOf('produtos-todos-public.html') == -1){
      this.location.href = "produtos-todos-public.html"
    }else{
      return 
    }
  })
  
}