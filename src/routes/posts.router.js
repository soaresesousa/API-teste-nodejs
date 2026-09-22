import { Router } from "express";
import { getPostsController } from "../controllers/posts.controller.js"; 

const router = Router();

router.get('/posts', getPostsController);

export default router;