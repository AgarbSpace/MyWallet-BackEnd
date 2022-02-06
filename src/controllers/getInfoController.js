import mywallet from "../myWalletDB.js";

export async function getInfo (request, response) {
    try{

        const user = response.locals.user;
        const movimentations = await mywallet.collection("movimentations").find({id: user.id}).toArray();
        
        response.send({
            ...user, movimentations: movimentations.reverse()
        });

    }catch{

        response.sendStatus(500);

    }
}

