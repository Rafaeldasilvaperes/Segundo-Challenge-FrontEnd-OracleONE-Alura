
const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json",
  produtosLocal: "http://localhost:4242/v1/products/",
  Heroku: "https://nodejs-service-for-aluramusic.herokuapp.com/v1/products/",
  Cyclic: "https://concerned-foal-outerwear.cyclic.app/v1/products/"
}

// change only here
const ENDPOINT = ENDPOINTS.Cyclic;

const APIKEY = "?api_key=070e92ae-990b-48c1-b220-a7f542d6024e"

// GET ALL
async function listaProdutos(){
  try {
    const resposta = await fetch(`${ENDPOINT}${APIKEY}`)
    return await resposta.json()
  } catch (error) {
    console.log(error)
    return error
  }
  
}

// GET:id
async function detalhaProduto(id){
  const resposta = await fetch(`${ENDPOINT}${id}${APIKEY}`)
  return await resposta.json()
}

// POST
async function adicionaProduto(img_b64, alt, tipo, titulo, preco, descricao){
  try {
    const token = sessionStorage.getItem('JWT');
    const resposta = await fetch(`${ENDPOINT}${APIKEY}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({
        productName: titulo,
        productPrice: preco,
        productDesc: descricao,
        productAlt: alt,
        productType: tipo,
        productImage: img_b64
      })
    })
    console.log(resposta.body)
    return resposta.body
  } catch (error) {
    console.log(error)
    return error
  }
  
}

// PATCH:id
async function atualizaProduto(id, img_b64, alt, tipo, titulo, preco, descricao){
  try {
    const token = sessionStorage.getItem('JWT');
    const resposta = await fetch(`${ENDPOINT}${id}${APIKEY}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        productImage: img_b64,
        productAlt: alt,
        productType: tipo,
        productName: titulo,
        productPrice: preco,
        productDesc: descricao
      })
    })
    return await resposta.json()
  } catch (error) {
    console.log(error)
    return error
  }
  
}

// DELETE:id
async function removeProduto(id){
  try {
    const token = sessionStorage.getItem('JWT');
    const resposta = await fetch(`${ENDPOINT}${id}${APIKEY}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return resposta
  } catch (error) {
    console.log(error)
    return error
  }
  
  
}

export const produtosService = {
  listaProdutos,
  detalhaProduto,
  adicionaProduto,
  removeProduto,
  atualizaProduto
}




