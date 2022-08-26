export function deslogar(){
  const buttonDeslogar = document.querySelector('[data-button-deslogar]')

  buttonDeslogar.addEventListener('click', function(){
    let itemSessao = sessionStorage.removeItem('Admin')
    return itemSessao
  })
}

