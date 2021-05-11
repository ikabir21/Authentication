import Joi from "joi";

const validate = (data, auth) => {
  if(auth === "signup"){
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(5)
    });
    return schema.validate(data);
  } else {
    const schema = Joi.object({
      name: Joi.string().optional().min(3).allow(''),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(5)
    })
    return schema.validate(data);
  }
}
export default validate;