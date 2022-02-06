import loginFormSchema from "../schemas/loginFormSchema.js";


export default function loginValidateSchemaMiddleware (request, response, next){
    const user = request.body;
    const validation = loginFormSchema.validate(request.body, {abortEarly:false});

    if(validation.error){
        response.sendStatus(422);
        return;
    }

    response.locals.user = user;

    next();

}