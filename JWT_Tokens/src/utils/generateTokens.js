import jwt from 'jsonwebtoken';
const generateToken=(userId)=>{
    return jwt.sign({id:userId}, 'your-secret-key',{
        expiresIn:'1h',
    });
};

export default generateToken;