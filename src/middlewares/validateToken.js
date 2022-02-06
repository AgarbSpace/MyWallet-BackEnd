import mywallet from "../myWalletDB.js";

export async function validateToken(request, response, next){

    try{

        const authorization = request.headers.authorization;
    
        const token = authorization?.replace('Bearer ', '');
    
        if(!token){
            response.sendStatus(401);
            return;
        }
    
        const session = await mywallet.collection("sessions").findOne({token});
        
        if(!session){
            response.sendStatus(401);
            return;
        }
    
        const user = await mywallet.collection("users").findOne({_id: session.userId})
        
        if(!user){
            response.sendStatus(401)
            return;
        }

        

        response.locals.user = {id: user._id, name: user.name};
    
        next();

    }catch (error){

        console.log(error)
        response.sendStatus(500);

    }
}