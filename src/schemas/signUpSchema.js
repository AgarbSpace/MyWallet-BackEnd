import joi from "joi"

const signUpFormSchema = joi.object({
    name: joi.string().pattern(/^[a-záàâãéèêíïóôõöúçñ ,.'-]+$/i).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    passwordConfirmed: joi.string().required()
})

export default signUpFormSchema;