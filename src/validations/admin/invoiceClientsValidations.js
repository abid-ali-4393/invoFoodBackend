const Joi = require("joi");
const { validateRequest } = require("../validateRequestGeneric");
const uploadInvoiceValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    fromDate: Joi.string().required(),
    toDate: Joi.string().required(),
    amount: Joi.number().required(),
    userId: Joi.string().allow(""),
  });
  validateRequest(req, res, next, schema);
};

// const validateRequest = (req, res, next, schema) => {
//   const options = {
//     abortEarly: false,
//     allowUnknown: true,
//     stripUnknown: true,
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
  uploadInvoiceValidation,
};
