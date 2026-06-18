import jwt from 'jsonwebtoken';

const authenticateJWT=(req,res,next)=>{
    const authHeader= req.headers.authorization;
    if(authHeader?.startsWith('Bearer ')){
        const token= authHeader.split(' ')[1];

        try{
            const decode=jwt.verify(token, 'your-secret-key');
            req.user=decode;  //attaching user-id
        }catch(err){
            req.ststus(403).json({
                message:"Invalid Token! "
            })
        }
    }else{
        req.ststus(401).json({
                message:"Authentication Token Missing! "
            })
    }

    next();
}

export default authenticateJWT;