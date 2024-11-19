var jwt = require('jsonwebtoken');
const generateToken=(userData)=>{
    return jwt.sign(userData, process.env.PRIVATE_KEY, { expiresIn: '1h' });
}

const validateJwtToken = (req,res,next)=>{ 
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json
        ({err:'Token not available'})
    }
// we are storing the token value from headers and splitting to get "bearer sdfgh" to ""
    const token = authorization.split(' ')[1]

    // token provided is wrong throw the error msg
    if(!token){
        return res.status(401).json
        ({err  : 'Unauthorized User'});
    }

    try{
        // in this error handler try catch : we are handling , if token is validated or verified , then move to next middleware or respond back to client.
        const validateToken = jwt.verify(token,process.env.PRIVATE_KEY);
        req.user = validateToken;
        next();
    }

    catch(err){
        console.error("Error Ocuured : " , err.message);
        return res.status(401).json({ err: 'Invalid or expired token' });
    }
};

module.exports = {generateToken,validateJwtToken};