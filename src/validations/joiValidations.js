import Joi from "joi";

const sendExamValidation = Joi.object({
    name: Joi.string().min(3).required(),
    link: Joi.string().uri().required(),
    categoryId: Joi.number().required(),
    profesorId: Joi.number().required(),
})

const validateForm = (form) => {
    let error;
    const validationError = sendExamValidation.validate(form).error;

    if(validationError) {
        error = validationError.details[0].message
            .replace(`"name"`, `Name`)
            .replace(`"link"`, `Link`)
            .replace(`"categoryId"`, `Category`)
            .replace(`"subjectId"`, `Subject`)
            .replace(`"profesorId"`, `Professor`)
    }

    return error;
}

export default validateForm;