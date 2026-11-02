# API de Posts

API REST de posts criada para estudo de Node.js e Express.

## Tecnlogias
- Node.js
- Express
-dotenv
- JSON como armazenamento local

## Como executar
```bash
npm install
crie um arquivo .env: 
PORT 3000

inicie: 
npm run dev

então a API estará rodadno em http://localhost:3000

## Endpoints:
### Health check
GET /health

### Listar posts
GET /posts

### Buscar post por ID
GET /posts/:id

### Criar post
POST /posts