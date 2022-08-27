# Segundo Challenge de Front-end Oracle ONE + Alura Challenges :notes:
[English Version](#englishVersion)

[![Alura Geek](img/Alura-Music-Capa.png)](https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura/index.html)

> Teste a aplicação clicando na imagem

O novo projeto proposto pela Alura Challenges desta vez consistiu em um site de eCommerce, originalmente chamado Alura Geek, mas modificado por mim para o Alura Music. 

Nesse projeto tivemos a divisão em 2 Sprints:
- a <strong>1° sprint</strong> focada na construção da parte visual da aplicação em HTML5 e CSS3;
- a <strong>2° sprint</strong> com a implementação das funcionalidades de ler, adicionar, editar e excluir produtos (CRUD) e a geração do nosso conteúdo de forma dinâmica com JavaScript.

O uso de <strong>Framework</strong> não foi requisitado para o auxílio da construção da aplicação.

A <strong>persistência de dados</strong> na aplicação não foi um requisito, porém para poder simular de forma um pouco mais dinâmica as funcionalidades da aplicação, eu fiz uso do pacote npm <code>JSON server</code>, populei ele localmente com minha aplicação, então subi o banco de dados 'fake' no github e usei um pipeline para conecta-lo ao Heroku como uma aplicação. Com isso consegui simular as funcionalidades de adição, edição e exclusão dos produtos na aplicação sem que essas mudaças persistam devido ao "restart" dos dynos do Heroku!

A aplicação é responsiva para <strong>mobile</strong>, <strong>tablet</strong> e <strong>desktop</strong>

Você pode testar a aplicação acessando este link: <a href="https://rafaeldasilvaperes.github.io/Segundo-Challenge-FrontEnd-OracleONE-Alura/" target="_blank"><strong>Alura Music ♫</strong></a>

## Alura Music ♫

Caso queira testar as funcionalidades de adicionar, editar, excluir da aplicação, será necessário entrar com um e-mail e senha após chegar na página de login. Insira os seguintes dados para logar:

- E-mail:
  - admin@hotmail.com
- Senha:
  - 123123

O campo de "Breve descrição da imagem" consiste em um item para acessibilidade que será usado no atributo "alt" da imagem e é obrigatório.

>Todas as alterações serão reiniciadas assim que os Dynos do Heroku reiniciarem, não se apegue a elas;