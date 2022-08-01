
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

function adicionaProduto(img_URL, alt, tipo, titulo, preco, descricao){
  return fetch("http://localhost:3001/products", {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({ 
      image: img_URL,
      alt: alt,
      type: tipo,
      name: titulo,
      price: preco,
      description: descricao
     })
  }).then(resposta => {
    return resposta.body
  })
}

function atualizaProduto(id, img_URL, alt, tipo, titulo, preco, descricao){
  return fetch(`http://localhost:3001/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      image: img_URL,
      alt: alt,
      type: tipo,
      name: titulo,
      price: preco,
      description: descricao
    })
  })
  .then(resposta => {
    return resposta.json()
  })
}

function removeProduto(id){
  return fetch(`http://localhost:3001/products/${id}`, {
    method: 'DELETE'
  })
}

export const produtosService = {
  listaProdutos,
  detalhaProduto,
  adicionaProduto,
  removeProduto,
  atualizaProduto
}




