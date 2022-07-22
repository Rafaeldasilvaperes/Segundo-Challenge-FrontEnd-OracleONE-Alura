import { produtosService } from "../service/cliente-service.js"
import { criadorProdutosTiposPrincipais } from "./cria-produto-por-tipo-controller.js"



export function filtraProdutoPorCategoria(type, elemento){

  const dataTipos = document.querySelectorAll(`[data-produtos]`)
  console.log("ESTOU AQUI, cria-produto: ", dataTipos)
  
  dataTipos.forEach(ul =>  {
    if(ul.getAttribute("data-produtos") == type){
      return ul.appendChild(criadorProdutosTiposPrincipais(elemento, "./views/produtos-produto.html", "../.."))
    }
  }
  )
}

export function appendProdutosPorTipo(){
  produtosService.listaProdutos()
  .then(data => {
      data.products.forEach(elemento => {
        filtraProdutoPorCategoria(elemento.type, elemento)
    });
  })
}

appendProdutosPorTipo();