import joi from "joi"

const loginFormSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

export default loginFormSchema