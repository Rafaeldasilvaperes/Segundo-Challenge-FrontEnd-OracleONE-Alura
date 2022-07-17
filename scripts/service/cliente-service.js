
const ENDPOINTS = {
  produtos: "http://localhost:3001/products"
}

function listaProdutos(){
  return fetch(ENDPOINTS.produtos)
  .then(resposta => {
    return resposta.json()
  })
}
export const produtosService = {
  listaProdutos
}




