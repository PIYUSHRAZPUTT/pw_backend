import express from 'express';
import { createPost, createUser} from '../controllers/auth.controller.js';

const router= express.Router();

router.post('/register', createUser);

router.post('/post', createPost);

export default router;