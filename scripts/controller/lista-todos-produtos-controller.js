import { produtosService } from '../service/cliente-service.js'
import { checaSessao } from './checa-se-esta-logado-controller.js'
import { deslogar } from './deslogar-controller.js'

deslogar()
checaSessao()


export function criadorDeProduto(objeto){
  
  const item = document.createElement('li')
  item.classList.add('produtos__container_lista')

  const produtoTemplate = 
  `
        <article class="produtos__article">
            <img src="${objeto.productImage}" alt="${objeto.productAlt}" class="produtos__item_imagem">
            <div class="produtos__item_btns_container">
              <button class="produtos__item_edit_btn"><img src="../img/delete-icon.svg" alt="Deletar Produto" data-btn-deletar="${objeto._id}"></button>
              <a href="./produto-editar.html?id=${objeto._id}" class="produtos__item_edit_btn" data-btn-editar="${objeto._id}"><img src="../img/edit-icon.svg" alt="Editar Produto"></a>
            </div>
            <h2 class="produtos__item_titulo">${objeto.productName}</h2>
            <h3 class="produtos__item_preco">R$ ${objeto.productPrice}</h3>
            <a href="./produtos-produto.html?id=${objeto._id}" class="produtos__item_link_ver_mais">#${objeto._id}</a>
        </article>

  `
  item.innerHTML = produtoTemplate;
  return item
}

export function appendTodosProdutos(){
  const tabela = document.querySelector('[data-produtos-todos]')

  tabela.addEventListener('click', (evento) =>{
        let botaoDeletarClicado = evento.target
        const modalContainer = document.querySelector('[data-modal]')
        const modal = document.querySelector('[data-modal-wrapper]')
        const buttonID = botaoDeletarClicado.getAttribute('data-btn-deletar')
        modalContainer.addEventListener('click', (e)=>{
          e.stopImmediatePropagation()
          if(e.target == modalContainer){
            modalContainer.classList.remove('active')
          }
        })
        
        if(buttonID){
         
          modalContainer.classList.add('active')
          const buttonSIM = modal.querySelector('[data-btn-sim]')
          const buttonNAO = modal.querySelector('[data-btn-nao]')
          
          modal.addEventListener('click', (e)=>{
  
            let escolha = e.target
            if(escolha && escolha == buttonSIM){
              modalContainer.classList.remove('active')
              deletarProduto(buttonID, evento)
              
            }else if(escolha && escolha == buttonNAO){
              modalContainer.classList.remove('active')
            }else if(escolha && escolha == modal || escolha == modal.children){
              
            }
          }) 
        }
      })

  produtosService.listaProdutos()
    .then(data => {
        data.forEach(elemento => {
        elemento.productImage = atob(elemento.productImage)
        tabela.appendChild(criadorDeProduto(elemento))
      });
    })
  }


// deleta produto
function deletarProduto(id, eventoProdutoClicado){
  const liDoProduto = eventoProdutoClicado.target.closest('li')
  produtosService.removeProduto(id)
  .then(()=>{
    liDoProduto.remove()
  })
}

appendTodosProdutos()
