import generateToken from "../utils/generateTokens.js";

export const login= (req, res)=>{
    const {username, password}= req.body;

    // simulate user validation
    if(username==='admin'&& password==='123456'){
        const token= generateToken('admin123'); //mock user Id
        return res.json({token});
    }
}