export function mostra_barra_de_procura(){
  const input = document.querySelector('[data-header-search-bar]')
  const lupaIcone = document.querySelector('[data-header-search-icon]')
  

  lupaIcone.addEventListener('click', function(){
    input.classList.toggle('activated')
  }, false)
  
}