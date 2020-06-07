# next-level-week
Aplicação web e mobile desenvolvida para encontrar pontos de coleta seletiva no Brasil. Evento organizado pela RocketSeat 🚀

<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="images/logo.png">
    <br><br>
    <br>
    <img alt="Web" title="#web" width="500px" src="images/web.PNG">
</h3>

## Tecnologias utilizadas

- TypeScript
- Node.js
- ReactJS
- React Native

## Dependências

### Back-end

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
npm install leaflet
```
```
npm install cors
```
```
npm install multer
```
```
npm install celebrate > validação dos dados
```

### Web

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
```
npm install react-dropzone
```

### Mobile

```
npm install -g expo-cli
```
```
npm install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```
```
npm install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```
```
npm install @react-navigation/native
```
```
npm install @react-navigation/stack
```
```
expo install react-native-maps
```
```
expo install expo-constants
```
```
expo install react-native-svg
```
```
npm install axios
```
```
expo install expo-location
```
```
expo install expo-mail-composer
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