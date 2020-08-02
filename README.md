# Shop cart

## Apresentação

Para realizar o projeto optei por utilizar o Vue.js por ter mais prática, não utilizei nenhuma lib CSS ou de componentes para criar o estilo da aplicação.

Toda a API estática foi feita utilizando o MirageJS, nele fiz toda a configuração do endpoint de listagem e de estoque de produtos.

A aplicação foi pensada para ser um PWA e TWA, onde o APK pode ser gerado facilmente utilizando o [Bubblewrap CLI](https://github.com/GoogleChromeLabs/bubblewrap), e ter uma grande vantagem de ter um APK do Ecommerce.


## Fluxo do carrinho

Quando o usuário seleciona um produto para colocá-lo no carrinho, uma requisição que valida se o mesmo existe em estoque é disparada. Caso este esteja disponível, outra requisição é disparada, buscando o item selecionado e por fim adicionando-o ao carrinho.

## Boas práticas

 - Algumas das boas práticas que utilizei no Vue para criar o projeto

    - [Style guide](https://vuejs.org/v2/style-guide/) - Style guide Vue.

    - [Patterns](https://learn-vuejs.github.io/vue-patterns/patterns/#component-communication) - Alguns patterns do vue

 - Mobile first

 - Html semântico - utilizando mixins SASS e BEM css


## Dependências do projeto

- [Axios](https://github.com/axios/axios) - Utilizado para realizar as requisições HTTP.

- [Miragejs](https://miragejs.com/) - Utilizado para criar uma API estática no front end.

- [Vue router](https://router.vuejs.org/) - Usado parar criar as rotas da aplicação;

- [Vuex](https://vuex.vuejs.org/) -  Gerenciador de Estado da aplicação, usado para gerenciar o carrinho de compras

- [PWA](https://cli.vuejs.org/core-plugins/pwa.html) - Permite a aplicação ser um PWA

- [JEST](https://jestjs.io/) - Usado para realizar os testes da aplicação;

- [@vue/test-utils](https://vue-test-utils.vuejs.org/) - Utilizado para auxiliar os testes nos componentes;


## Estruta do projeto
 - src
    - `/components`
    - `/assets`< -- contém todas as imagens e arquivos da aplicação
    - `/miragejs`< -- configuração do miragejs para subir uma API estática.
    - `/filters` < -- contém os filtros globais utilizados na aplicação.
    - `/router` < -- contém a configuração do Vue router.
    - `/services` < -- contém a configuração do axios e funções que executam as requisições para API's
    - `/store` < -- configuração do Vuex
    - `/styles` < -- contém todos os estilos globais em SCSS.
    - `/views` < -- páginas da aplicação



# Inicializando o projeto

Para executar o projeto é necessário ter o Node.js devidamente instalado e configurado na máquina.

## Instalar dependências
```
npm install
```

### Compilar e executar a aplicação no modo de desenvolvimento com  hot-reloads
```
npm run serve
```

### Compilar e minificar para produção
```
npm run build
```

### Executar testes unitários 
```
npm run test:unit
```

### Executar o Eslint e corrigir os arquivos
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
