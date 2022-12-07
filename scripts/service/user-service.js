const ENDPOINTS = {
  produtos: "https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura-backend/backend/db.json",
  produtosLocal: "http://localhost:3000/v1/auth/register",
  Heroku: "https://nodejs-service-for-aluramusic.herokuapp.com/v1/products/",
  Cyclic: "https://concerned-foal-outerwear.cyclic.app/v1/auth"
}

// change only here
const ENDPOINT = ENDPOINTS.Cyclic;

const APIKEY = "?api_key=070e92ae-990b-48c1-b220-a7f542d6024e"


// GET:id
async function recebeUmUsuario(id){
  const resposta = await fetch(`${ENDPOINT}${id}${APIKEY}`)
  return await resposta.json()
}

// POST
async function registraUsuario(email, password, confirmPassword){
  
    const resposta = await fetch(`${ENDPOINT}/register${APIKEY}`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
      confirmPassword: confirmPassword
    })
  })
  try {
      if(resposta.ok){
      let ret = await resposta.json();
      console.log(ret)
      return ret
      }else{
        let err = await resposta.json();
        console.log(err)
        return err
      }
  }catch (error) {
    return `Erro interno: ${error}`;
  }
}

async function logaUsuario(email, password){
  const resposta = await fetch(`${ENDPOINT}/login${APIKEY}`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  try {
    if(resposta.ok){
    let ret = await resposta.json();
    console.log(ret)
    return ret
    }else{
      let err = await resposta.json();
      console.log(err)
      return err
    }
}catch (error) {
  return `Erro interno: ${error}`;
}
  
}


// "Authorization": `Bearer ${payload.token}`


export const produtosService = {
  logaUsuario,
  recebeUmUsuario,
  registraUsuario

}

