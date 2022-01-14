const Joi = require("joi");
const { validateRequest } = require("../validateRequestGeneric");
const uploadMenuValidation = (req, res, next) => {
  const schema = Joi.object({
    menuTitle: Joi.string().required(),
    fromDate: Joi.string().required(),
    toDate: Joi.string().required(),
    userId: Joi.string().allow(""),
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
  uploadMenuValidation,
};
