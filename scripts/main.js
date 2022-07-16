import { mostraInputDeProcurar } from './search-btn/search-btn.js'
import { CONTATOSectionGenerator } from './contato-section/contato.js'
import { FOOTERSectionGenerator } from './footer-section/footer.js'
import { isInViewport } from './lazy-load/visibilidadeDoElemento.js'

mostraInputDeProcurar();
//CONTATOSectionGenerator();
FOOTERSectionGenerator();

const contatos = document.querySelectorAll('[data-section-contatos]')
console.log(contatos)

// CRIAR OBJETO COM DATA-SECTION PARA TENTAR ITERAR POR ELES E ACHAR OS CONTEUDOS PARA FAZER LAZY LOAD

document.addEventListener('scroll', function(){
  contatos.forEach(contato => {
    console.log(contato)
    const showContent = isInViewport(contato) ? CONTATOSectionGenerator() : console.log("IT IS NOT")
  });
})

window.addEventListener('load', function(){
  contatos.forEach(contato => {
    console.log(contato)
    const showContent = isInViewport(contato) ? CONTATOSectionGenerator() : console.log("IT IS NOT")
  });
})
