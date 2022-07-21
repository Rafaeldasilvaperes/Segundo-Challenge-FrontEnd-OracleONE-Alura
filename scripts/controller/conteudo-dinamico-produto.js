import { produtosService } from '../service/cliente-service.js'

export function itemClicado(e){
  
  const titleText = e.target.parentNode.querySelector('[data-name]').textContent
  

  produtosService.listaProdutos()
  .then(data => {
    data.products.forEach(elemento => {
      if(elemento.name == titleText){
        localStorage.setItem("produto", JSON.stringify(elemento))
      }
      
  });
  })
}