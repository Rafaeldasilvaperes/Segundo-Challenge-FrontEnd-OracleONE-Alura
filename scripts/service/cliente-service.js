
const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json",
  produtosLocal: "http://localhost:3000/products/",
  Heroku: "https://fake-server-app-alura-music.herokuapp.com/products/"
}

function listaProdutos(){
  return fetch(ENDPOINTS.Heroku)
  .then(resposta => {
    return resposta.json()
  })
}

function detalhaProduto(id){
  return fetch(`${ENDPOINTS.Heroku}${id}`)
  .then(resposta => {
    return resposta.json()
  })
}

function adicionaProduto(img_URL, alt, tipo, titulo, preco, descricao){
  return fetch(ENDPOINTS.Heroku, {
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
  return fetch(`${ENDPOINTS.Heroku}${id}`, {
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
  return fetch(`${ENDPOINTS.Heroku}${id}`, {
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




