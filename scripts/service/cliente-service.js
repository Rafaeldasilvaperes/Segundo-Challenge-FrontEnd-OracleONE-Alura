
const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json",
  produtosLocal: "http://localhost:3001/products"
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




