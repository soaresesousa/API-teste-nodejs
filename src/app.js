import express from 'express';

const app = express();
app.use(express.json());

export default app;

app.get("/health", (req,res) => {
    res.status(200).json({message: "Servidor rodando na web com sucesso"});
})