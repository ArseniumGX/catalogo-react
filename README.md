# Blue EdTech
## Módulo III - Fullstack

---

## Catálogo de Vídeos
Projeto da semana 2 do curso da Blue EdTech, módulo III (Fullstack), de um app em react.

Projeto consiste em um catálogo qualquer (aqui de vídeos) para construção de um layout em react onde é listado alguns items de uma lista estática.

O projeto foi contruído do zero sem o uso do script create-react-app para melhor compreensão própria de como as coisas são construídas.

### O que há implementado
O projeto contem todos os requisitos necessário para a atividade, porém usando a ideia do iframe, fiz algo diferente do que foi inicialmente pedido, mas dentro do escopo necessário. A unica coisa que não está presente é o extra do map embutido, pois não vi onde encaixar na ideia do projeto, mas sei como fazer. Há um botão na tela inicial que exibe um modal na página para adiçao de novos itens ao catálogo, mas não está funcional. A ideia do form aqui implementado foi para uma ideia de integrar essa interface com um micro backend em node fazendo requisições usando axios. Não está completo, tive algumas dificuldades nessa parte, mas após a avaliação irei continuar com esse projeto.

### Para executar
Primeiro use o comando abaixo para instalar as dependencias

```bash
yarn install
```
ou 
```bash
npm install
```

Após isso execute o script de execução
```bash
yarn client
```
ou
```bash
npm run client
```

*Atenção*
Não execute o comando...
```yarn start```
O mesmo está configurado para executar tanto backend como frontend usando a biblioteca _concurrently_. Vai executar normalmente, porém se hover erros no backend não sei como o frontend ira se comportar, mesmo sendo aplicações independentes.