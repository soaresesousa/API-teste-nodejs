import express from 'express';
import router from './routes/posts.router.js';
import { errorHandler } from './middlewares/error.middleware.js';

export const app = express();
app.use(express.json());

app.get("/health", (req,res) => {
    res.status(200).json({message: "Servidor rodando na web com sucesso"});
})

app.use(router);

app.use((req,res) => {
    return res.status(404).json({"message": "Rota não encontrada"});
})

app.use(errorHandler);