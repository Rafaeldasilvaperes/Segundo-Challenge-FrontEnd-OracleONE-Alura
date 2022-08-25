export function checaSessao(){
  const itemSessao = sessionStorage.getItem('Admin')
  if(!itemSessao){
    location.href = "home-login.html"
  }else{
    return
  }
}