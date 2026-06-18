import {Router} from 'express';
import authenticateJWT from '../middleware/auth.js';
const router= Router();

router.get('/secure-data', authenticateJWT, (req,res)=>{
    res.status(200).json({
        message:"Welcome to protected router!",
        user:req.user
    });
});

export default router;

