export function checaSeEstaLogado(){
  const itemSessao = sessionStorage.getItem('Admin')
  
  document.addEventListener('DOMContentLoaded', function(){
    if(itemSessao && window.location.href.indexOf('index-logado.html') == -1){
      this.location.href = "index-logado.html"
    }else if(!itemSessao && window.location.href.indexOf('index.html') == -1){
      this.location.href = "index.html"
    }else{
      return 
    }
  })
  
}