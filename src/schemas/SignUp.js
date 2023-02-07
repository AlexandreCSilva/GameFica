import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const JoiPassword = Joi.extend(joiPasswordExtendCore);
const signUpSchema = Joi.object({
  nome: Joi.string().min(1).required(),
  email: Joi.alternatives().try(
    Joi.string()
      .email({ tlds: { allow: false } })
      .required(),

    Joi.string().required()
  ),
  senha: JoiPassword.string()
    .min(8)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(),
  confirmaSenha: Joi.string().allow(Joi.ref("password")).required(),
});

export { signUpSchema };