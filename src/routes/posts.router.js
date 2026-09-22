import { Router } from "express";
import { getPostsController } from "../controllers/posts.controller.js"; 
import { getPostByIDController } from "../controllers/posts.controller.js";

const router = Router();

router.get('/posts', getPostsController);

router.get('/posts/:id', getPostByIDController);

export default router;