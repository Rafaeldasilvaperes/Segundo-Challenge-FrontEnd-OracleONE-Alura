export function checaSessao(){
  const itemSessao = sessionStorage.getItem('JWT')
  if(!itemSessao){
    location.href = "home-login.html"
  }else{
    return
  }
}