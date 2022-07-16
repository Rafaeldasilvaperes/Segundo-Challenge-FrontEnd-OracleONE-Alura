export function FOOTERSectionGenerator(){
  const footerSection = document.querySelector('[data-section-footer]')
  
  footerSection.innerHTML = `
    <a target="_blank" href="https://www.linkedin.com/in/rafael-da-silva-peres-ba4228bb/">
      <h2>
      Desenvolvido por Rafael Peres <br>2022
      </h2>
    </a>
  `
}