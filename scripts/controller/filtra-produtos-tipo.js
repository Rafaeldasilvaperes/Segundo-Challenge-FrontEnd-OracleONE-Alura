import { produtosService } from "../service/cliente-service.js"
import { criadorProdutosTiposPrincipais } from "./cria-produto-por-tipo-controller.js"

export function filtraProdutoPorCategoria(type, elemento){

  const dataTipos = document.querySelectorAll(`[data-produtos]`)
  
  dataTipos.forEach(ul =>  {
    if(ul.getAttribute("data-produtos") == type){
      return ul.appendChild(criadorProdutosTiposPrincipais(elemento, elemento.id, "."))
    }
  }
  )
  const buffer = document.getElementById('buffer')
  buffer.classList.remove('active') // retira página de buffering após carregamento de conteúdo
}

export function appendProdutosPorTipo(){
  
  produtosService.listaProdutos()
  .then(data => {
      data.forEach(elemento => {
        filtraProdutoPorCategoria(elemento.type, elemento)
    });
  })
}

appendProdutosPorTipo();

