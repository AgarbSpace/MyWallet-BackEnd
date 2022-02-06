import bcrypt from "bcrypt"
import mywallet from "../myWalletDB.js";

export async function signUp(request, response) {
    const user = request.body;

    try{
        const passwordHashed = bcrypt.hashSync(user.password, 10);
        
        const usersCollection = mywallet.collection("users")
        const userLogin = await usersCollection.insertOne({...user, email: user.email.toLowerCase(), password: passwordHashed, passwordConfirmed: passwordHashed});

        if(!userLogin){
            response.sendStatus(401);
            return;
        }

        response.sendStatus(200);
    }catch{
        response.sendStatus(500);
    }
}
