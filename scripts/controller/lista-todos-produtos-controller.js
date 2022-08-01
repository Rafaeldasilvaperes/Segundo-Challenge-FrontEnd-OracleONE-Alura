import { produtosService } from '../service/cliente-service.js'

export function criadorDeProduto(objeto){
  
  const item = document.createElement('li')

  const produtoTemplate = 
  `
        <article class="produtos__article">
            <img src="${objeto.image}" alt="${objeto.alt}" class="produtos__item_imagem">
            <div class="produtos__item_btns_container">
              <button class="produtos__item_edit_btn"><img src="../img/delete-icon.svg" alt="Deletar Produto" data-btn-deletar="${objeto.id}"></button>
              <a href="./produto-editar.html?id=${objeto.id}" class="produtos__item_edit_btn" data-btn-editar="${objeto.id}"><img src="../img/edit-icon.svg" alt="Editar Produto"></a>
            </div>
            <h2 class="produtos__item_titulo">${objeto.name}</h2>
            <h3 class="produtos__item_preco">R$ ${objeto.price}</h3>
            <a href="#" class="produtos__item_link_ver_mais">#${objeto.id}</a>
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
        let buttonID = botaoDeletarClicado.getAttribute('data-btn-deletar')
        modalContainer.addEventListener('click', (e)=>{
          e.stopImmediatePropagation()
          if(e.target == modalContainer){
            modalContainer.classList.remove('active')
          }
        })
        
        if(buttonID){
          console.log(buttonID)
          modalContainer.classList.add('active')
          const buttonSIM = modal.querySelector('[data-btn-sim]')
          const buttonNAO = modal.querySelector('[data-btn-nao]')
          
          modal.addEventListener('click', (e)=>{
            e.stopImmediatePropagation()
            let escolha = e.target
            if(escolha && escolha == buttonSIM){
              console.log("APAGOU!", escolha)
              deletarProduto(buttonID, evento)
              modalContainer.classList.remove('active')
             
            }else if(escolha && escolha == buttonNAO){
              console.log("NOPE", escolha)
              modalContainer.classList.remove('active')
            }else if(escolha && escolha == modal || escolha == modal.children){
              console.log("Erro os botões meu filho")
            }
          }) 
        }
      })

  produtosService.listaProdutos()
    .then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criadorDeProduto(elemento))
      });
    })
  }

function deletarProduto(id, eventoProdutoClicado){
  const liDoProduto = eventoProdutoClicado.target.closest('li')
  produtosService.removeProduto(id)
  .then(()=>{
    liDoProduto.remove()
  })
}

appendTodosProdutos()
