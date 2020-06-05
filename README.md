# next-level-week
Semana organizada pela Rocketseat para impulsionar a carreira como Desenvolvedor Web FullStack

## Pré-requisitos

* Download Nodejs

## Dependências

```
npm install express > interpreta os caminhos da aplicação
```
```
npm install @types/express -D > -D: apenas para ambiente de desenvolvimento
```
```
npm install ts-node -D > node interpretar o typescript
```
```
npm install typescript -D
```
```
npm install ts-node-dev -D > assim não é necessário reiniciar o servidor a cada modificação
```
```
npx create-react-app web --template=typescript 
```
```
npm install knex
```
```
npm install sqlite3
```
```
npm install cors
```
```
npm install react-icons
```
```
npm install react-router-dom
```
```
npm install leaflet react-leaflet
```
```
npm install axios
```

## Comandos iniciais
##### Criar inicialização do projeto com configurações padrão
```
npm init -y
```
##### Abre o Visual Code dentro do terminal
```
cd pathFolder
```
```
code .
```
##### Cria configuração padrão do TypeScript
```
npx tsc --init
```
##### Executa a migração do banco de dados
```
npm run knex:migrate
```
##### Executa para popular o banco de dados
```
npm run knex:seed
```
##### Executa o projeto
###### Back-end
```
cd server
npm run dev > dev assignado dentro do package.json
```

###### Front-end
```
cd web
npm start
```