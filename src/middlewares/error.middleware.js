export function errorHandler(error, req, res, next){
    console.error(error);

    const isInvalidJson = error instanceof SyntaxError && error.status === 400 && 'body' in error;
    
    if(isInvalidJson) return res.status(400).json({"message": "JSON inválido"});

    return res.status(500).json({"message": "Erro interno do servidor"});
    
}