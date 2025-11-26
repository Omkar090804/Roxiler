const Joi = require('joi');

const nameSchema = Joi.string().min(20).max(60).required();
const addressSchema = Joi.string().max(400).allow('').optional();
const passwordSchema = Joi.string().min(8).max(16).pattern(new RegExp('^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$')).required();
const emailSchema = Joi.string().email().required();

function validateSignup(payload) {
  const schema = Joi.object({
    name: nameSchema,
    email: emailSchema,
    address: addressSchema,
    password: passwordSchema
  });
  return schema.validate(payload);
}

function validateLogin(payload) {
  const schema = Joi.object({
    email: emailSchema,
    password: Joi.string().required()
  });
  return schema.validate(payload);
}

module.exports = { validateSignup, validateLogin };
