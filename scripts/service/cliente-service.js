
const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json"
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




