import { getPosts } from "../services/posts.service.js";

export async function getPostsController(req,res) {
    const posts = await getPosts();
    
    return res.status(200).json(posts);
}