
const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json",
  produtosLocal: "http://localhost:3001/products"
}

function listaProdutos(){
  return fetch("http://localhost:3001/products")
  .then(resposta => {
    return resposta.json()
  })
}

function detalhaProduto(id){
  return fetch(`http://localhost:3001/products/${id}`)
  .then(resposta => {
    return resposta.json()
  })
}


export const produtosService = {
  listaProdutos,
  detalhaProduto
}




