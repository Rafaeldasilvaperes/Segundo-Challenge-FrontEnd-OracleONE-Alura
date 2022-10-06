
const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json",
  produtosLocal: "http://localhost:3000/products/",
  Heroku: "https://nodejs-service-for-aluramusic.herokuapp.com/products/"
  // Heroku: "https://fake-server-app-alura-music.herokuapp.com/products/"
  // Heroku: "https://servico-para-alura-music.herokuapp.com/aluramusic/index/"
}

const APIKEY = "?api_key=070e92ae-990b-48c1-b220-a7f542d6024e"

// GET ALL
async function listaProdutos(){
  const resposta = await fetch(`${ENDPOINTS.Heroku}${APIKEY}`)
  return await resposta.json()
}

// GET:id
async function detalhaProduto(id){
  const resposta = await fetch(`${ENDPOINTS.Heroku}${id}${APIKEY}`)
  return await resposta.json()
}

// POST
async function adicionaProduto(img_URL, alt, tipo, titulo, preco, descricao){
  const resposta = await fetch(`${ENDPOINTS.Heroku}${APIKEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productName: titulo,
      productPrice: preco,
      productDesc: descricao,
      productAlt: alt,
      productType: tipo,
      productImage: img_URL
    })
  })
  return resposta.body
}

// PUT:id
async function atualizaProduto(id, img_URL, alt, tipo, titulo, preco, descricao){
  const resposta = await fetch(`${ENDPOINTS.Heroku}${id}${APIKEY}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      productImage: img_URL,
      productAlt: alt,
      productType: tipo,
      productName: titulo,
      productPrice: preco,
      productDesc: descricao
    })
  })
  return await resposta.json()
}

// DELETE:id
async function removeProduto(id){
  const resposta = await fetch(`${ENDPOINTS.Heroku}${id}${APIKEY}`, {
    method: 'DELETE'
  })
  return resposta
  
}

export const produtosService = {
  listaProdutos,
  detalhaProduto,
  adicionaProduto,
  removeProduto,
  atualizaProduto
}




