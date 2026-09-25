import { Router } from "express";
import { getPostsController, getPostByIDController, createPostController, updatePostController } from "../controllers/posts.controller.js"; 

const router = Router();

router.get('/posts', getPostsController);

router.get('/posts/:id', getPostByIDController);

router.post('/posts', createPostController);

router.patch('/posts/:id', updatePostController);

export default router;