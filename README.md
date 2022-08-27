# Segundo Challenge de Front-end Oracle ONE + Alura Challenges :notes:
[English Version](#englishVersion)

<a href="https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura/index.html" title="Alura Music ♫" target="_blank">
  <img src="img/Alura-Music-Capa.png">
</a>

> Teste a aplicação clicando na imagem


O novo projeto proposto pela Alura Challenges desta vez consistiu em um site de eCommerce, originalmente chamado Alura Geek, mas modificado por mim para o Alura Music. 

Nesse projeto tivemos a divisão em 2 Sprints:
- a <strong>1° sprint</strong> focada na construção da parte visual da aplicação em HTML5 e CSS3;
- a <strong>2° sprint</strong> com a implementação das funcionalidades de ler, adicionar, editar e excluir produtos (CRUD) e a geração do nosso conteúdo de forma dinâmica com JavaScript.

O uso de <strong>Framework</strong> não foi requisitado para o auxílio da construção da aplicação.

A <strong>persistência de dados</strong> na aplicação não foi um requisito, porém para poder simular de forma um pouco mais dinâmica as funcionalidades da aplicação, eu fiz uso do pacote npm <code>JSON server</code>, populei ele localmente com minha aplicação, então subi o banco de dados 'fake' no github e usei um pipeline para conecta-lo ao Heroku como uma aplicação. Com isso consegui simular as funcionalidades de adição, edição e exclusão dos produtos na aplicação sem que essas mudaças persistam devido ao "restart" dos dynos do Heroku!

A aplicação é responsiva para <strong>mobile</strong>, <strong>tablet</strong> e <strong>desktop</strong>

Você pode testar a aplicação acessando este link: 
- <a href="https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura/" target="_blank"><strong>Alura Music ♫ (GitHub Pages)</strong></a>
- <a href="https://segundo-challenge-frontend-one.herokuapp.com/index.html" target="_blank"><strong>Alura Music ♫ (Heroku)</strong></a>

Você pode acessar o meu JSON server "Fake Database" através dos links:
- <a href="https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura/" target="_blank"><strong>Alura Music DB ♫ (Repositório GitHub)</strong></a>
- <a href="https://fake-server-app-alura-music.herokuapp.com/products" target="_blank"><strong>Alura Music DB ♫ (Heroku)</strong></a>

## Alura Music ♫

Caso queira testar as funcionalidades de adicionar, editar, excluir da aplicação, será necessário entrar com um e-mail e senha após chegar na página de login. Insira os seguintes dados para logar:

- E-mail:
  - admin@hotmail.com
- Senha:
  - 123123

O campo de "Breve descrição da imagem" consiste em um item para acessibilidade que será usado no atributo "alt" da imagem e é obrigatório.

> Todas as alterações serão reiniciadas assim que os Dynos do Heroku reiniciarem, não se apegue a elas;

## Tecnologias :gear:


![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Foi disponibilizado um <strong>Wireframe</strong> no <strong>Figma</strong> pelo pessoal da Alura Challenges para que fosse usado como base. Tentei manter todas as proporções de acordo com o Design do Projeto. Tomei a liberdade de fazer algumas mudanças chaves na aplicação para obter a expressão de um tema relacionado a música, mas nenhuma mudança na identidade ou na estrutura do design do projeto foram feitas. 

Devido a falta de uma página de exibição de <strong>Todos os Produtos Pública</strong> no Design disponibilizado, construí uma nova página tentando manter a mesma identidade visual do resto da aplicação.

Você pode visualizar o Wireframe proposto através do link:

<a href="https://www.figma.com/file/itJpWbvHxSUcUeMPy1lmof/AluraGeek?node-id=0%3A1" title="Alura Geek Wireframe" target="_blank">
<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white">
</a>


## Bedge de Entrega :heavy_check_mark:


<img src="./img/badge-de-entrega-projeto.png" title="Badge de Entrega Oracle ONE + Alura Challenges">