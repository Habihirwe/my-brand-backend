import Joi from "joi";

const queryValidationSchema = Joi.object({
    firstName: Joi.string().required().min(2).label("first name").regex(/^[A-Za-z]+$/).messages({
        "string.pattern.base": "The name field can not include numbers and special characters",
        "string.empty": "The name field can not be empty"
    }),

    lastName: Joi.string().required().min(2).label("last name").regex(/^[A-Za-z]+$/).messages({
        "string.pattern.base": "The name field can not include numbers and special characters",
        "string.empty": "The name field can not be empty"
    }),

    email: Joi.string().required().label("email").email().messages({
        "string.email": "Invalid email",
        "string.empty": "The email field can not be empty"
    }),

    message: Joi.string().required().label("message").messages({
        "string.empty": "The message field can not be empty"
    })
})


export default queryValidationSchema