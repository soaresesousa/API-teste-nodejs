# API de Posts

API REST de posts criada para estudo de Node.js e Express.

## Tecnologias
- Node.js
- Express
- dotenv
- JSON como armazenamento local

## Como executar
```bash
npm install
crie um arquivo .env: 
PORT 3000

inicie: 
npm run dev

então a API estará rodadno em http://localhost:3000
```
## Endpoints:
### Health check
```
GET /health
```
### Listar posts
```
GET /posts
```
### Buscar post por ID
```
GET /posts/:id
```
### Criar post
```
POST /posts
corpo: 
{
    "title": "seu titulo",
    "content": "seu conteudo",
    "author": "autor do post"
}
```
### Atualizar post
```
PATCH /posts/:id
campos possiveis: {
    "title": "seu titulo",
    "content": "seu conteudo",
    "author": "autor do post"
}
```
### Excluir post
```
DELETE /posts/:id
```
### HTTP Status Codes
```
- 200: sucesso
- 201: recurso criado
- 204: recurso removido, sem retorno
- 400: requisição inválida
- 404: recurso não encontrado
- 500: erro interno de servidor
```
## Formato de um post retornado
```
{
    "title": "string",
    "content": "string",
    "author": "string",
    "id": number,
    "createdAt": "Date",
    "updatedAt": "Date"
}
```
## Mensagens de erros
```
GET id inválido: "ID inválido"
GET id inexistente: "Post não encontrado"
POST sem todos os campos: "Campos title, content e author são obrigatórios"
PATCH com campo vazio: "Pelo menos um campo deve ser atualizado
PATCH com id inválido: "ID inválido"
PATCH com id inexistente: "Post a ser atualizado não encontrado"
PATCH com campo inválido: "campo inválido"
DELETE com id inválido: "ID inválido"
DELETE com id inexistente: "id do post não encontrado"
```