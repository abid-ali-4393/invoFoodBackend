const Joi = require("joi");
const { validateRequest } = require("../validateRequestGeneric");
const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("Admin", "User").required(),
  });
  validateRequest(req, res, next, schema);
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  validateRequest(req, res, next, schema);
};

// const validateRequest = (req, res, next, schema) => {
//   const options = {
//     abortEarly: false, // include all errors
//     allowUnknown: true, // ignore unknown props
//     stripUnknown: true, // remove unknown props
//   };
//   const { error, value } = schema.validate(req.body, options);

//   if (error) {
//     errorDetail = error.details.map((e) => e.message).join(", ");
//     console.log(error.details);
//     return res.status(400).json({
//       statusCode: 400,
//       status: false,
//       message: "Bad Request",
//       error: errorDetail,
//     });
//   } else {
//     req.body = value;
//     next();
//   }
// };

module.exports = {
  registerValidation,
  loginValidation,
};
