import { getPosts } from "../services/posts.service.js";
import { getPostByID } from "../services/posts.service.js";

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