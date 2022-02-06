import movimentationSchema from "../schemas/movimentationSchema.js";

export default async function movimentationValidationMiddleware(request, response, next){
    const movimentation = request.body;
    const validation = movimentationSchema.validate(request.body, {abortEarly:false});

    if(validation.error){
        response.sendStatus(422);
        return;
    }

    try{
        const user = {...response.locals.user, ...movimentation};

        response.locals.user = user

        next();

    }catch(error){
        console.log(error)
        response.serverStatus(500)
    }
}