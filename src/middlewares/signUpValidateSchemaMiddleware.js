import mywallet from "../myWalletDB.js";
import signUpFormSchema from "../schemas/signUpSchema.js";

export default async function signUpValidateSchemaMiddleware (request, response, next){
    try{

        const user = request.body;
        const validation = signUpFormSchema.validate(user, {abortEarly:false});
        
        if(validation.error){
            const error = validation.error.details.map(error => error.message)
            response.status(422).send(error);
            return;
        }
    
        const emailInUse = await mywallet.collection("users").findOne({email: user.email});
    
        if(emailInUse){
            response.status(422).send("E-mail em uso, tente outro.");
            return;
        }
    
        if(user.password !== user.passwordConfirmed){
            response.status(422).send("As senhas não conferem! Tente novamente.");
            return;
        }
    
        next();

    }catch (error){

        console.log(error);
        response.sendStatus(500);

    }
}