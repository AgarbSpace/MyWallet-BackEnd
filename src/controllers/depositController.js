import dayjs from "dayjs";
import mywallet from "../myWalletDB.js";

export default async function depositController(request, response){

    const userAndMovimentation = response.locals.user

    try{
        const deposit = await mywallet.collection("movimentations").insertOne({...userAndMovimentation, day: `${dayjs().date()}/${dayjs().month() + 1}`})
        
        if(!deposit){
            response.sendStatus(422);
            return;
        }

        response.sendStatus(200);
        
    }catch (error){
        
        console.log(error);
        response.sendStatus(500);
    }

}