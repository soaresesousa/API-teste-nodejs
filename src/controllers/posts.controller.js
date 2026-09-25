import { getPosts, getPostByID, createPost, updatePost } from "../services/posts.service.js";

export async function getPostsController(req,res) {
    const posts = await getPosts();
    
    return res.status(200).json(posts);
}

export async function getPostByIDController(req,res){
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({message: "ID inválido"});
    }

    const post = await getPostByID(id);
    if(!post) return res.status(404).json({message: "Post não encontrado"});

    return res.status(200).json(post);
}

export async function createPostController(req,res){
    const {title, content, author} = req.body;

    const isValidContent = (value) => typeof value === "string" && value.trim().length > 0;

    if(isValidContent(title) && isValidContent(content) && isValidContent(author)){
        const createdPost = await createPost({title, content, author});
        return res.status(201).json(createdPost);
    }
    return res.status(400).json({message: "Campos de title, content e author são obrigatórios"});
}

export async function updatePostController(req,res){
    
    const id = Number(req.params.id);
    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({message: "ID inválido"});
    }
    
    const updateBody = req.body;
    const requestedData = Object.keys(updateBody);
    const allowedKeys = ["title", "content", "author"];

    const isValidField = requestedData.every((key) => allowedKeys.includes(key));
    if(!isValidField) return res.status(400).json({message: "Campo(s) inválido(s)"});

    for(let key of requestedData){
        let value = updateBody[key];

        if(typeof value !== 'string' || value.trim().length === 0) return res.status(400).json({message: "Campos não podem ser vazios e devem ser strings!"});
    }
    
    if(requestedData.length === 0) return res.status(400).json({message: "Pelo menos um campo deve ser atualizado!"});

    const updatedPost = await updatePost(id,updateBody);

    if(!updatedPost) return res.status(404).json({message: "Post a ser atualizado não encontrado!"});

    return res.status(200).json(updatedPost);
}