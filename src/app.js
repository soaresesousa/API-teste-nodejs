import express from 'express';
import router from './routes/posts.router.js';

const app = express();
app.use(express.json());

app.get("/health", (req,res) => {
    res.status(200).json({message: "Servidor rodando na web com sucesso"});
})

app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})