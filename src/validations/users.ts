import Joi from 'joi';

export const userSchema = Joi.object({
  first_name: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z\s]*$/)
    .required()
    .messages({
      'string.base': 'First name must contain only letters',
      'string.empty': 'First name is required',
      'string.min': 'First name must have at least 3 chars',
      'string.max': 'First name cannot be more than 20 chars',
      'string.pattern.base': 'First name must contain only letters',
      'any.required': 'First name is required',
    }),
  last_name: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z\s]*$/)
    .required()
    .messages({
      'string.base': 'Last name must contain only letters',
      'string.empty': 'Last name is required',
      'string.min': 'Last name must have at least 3 chars',
      'string.max': 'Last name cannot be more than 20 chars',
      'string.pattern.base': 'Last name must contain only letters',
      'any.required': 'Last name is required',
    }),
  username: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z0-9]*$/)
    .required()
    .messages({
      'string.base': 'Username must contain only letters and numbers',
      'string.empty': 'Username is required',
      'string.min': 'Username must have at least 3 chars',
      'string.max': 'Username cannot be more than 20 chars',
      'string.pattern.base': 'Username must contain only letters and numbers',
      'any.required': 'Username is required',
    }),
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Email must have a valid format',
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
    }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one uppercase, lowercase, number and special character',
      'any.required': 'Password is required',
      'string.min': 'Password must have at least 8 chars',
      'string.empty': 'Password is not allowed to be empty',
    }),
});

export const profileSchema = Joi.object({
  first_name: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z\s]*$/)
    .messages({
      'string.base': 'First name must contain only letters',
      'string.min': 'First name must have at least 3 chars',
      'string.max': 'First name cannot be more than 20 chars',
      'string.pattern.base': 'First name must contain only letters',
    }),
  bio: Joi.string()
    .min(3)
    .max(200)
    .required()
    .messages({
      'string.base': 'Bio must contain only letters',
      'string.min': 'Bio must have at least 3 chars',
      'string.max': 'Bio cannot be more than 200 chars',
      'string.pattern.base': 'Bio must contain only letters',
    }),
    location: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Location must contain only letters',
      'string.min': 'Location must have at least 3 chars',
      'string.max': 'Location cannot be more than 20 chars',
      'string.pattern.base': 'Location must contain only letters',
    }),
    web: Joi.string()
    .pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
    .messages({
      'string.pattern.base': 'Website must have a valid format',
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Email must have a valid format',
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
    }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one uppercase, lowercase, number and special character',
      'any.required': 'Password is required',
      'string.min': 'Password must have at least 8 chars',
      'string.empty': 'Password is not allowed to be empty',
    }),
});

export const registerSchema = Joi.object({
  first_name: userSchema.extract('first_name'),
  last_name: userSchema.extract('last_name'),
  username: userSchema.extract('username'),
  email: userSchema.extract('email'),
  password: userSchema.extract('password'),
  repeat_password: Joi.ref('password'),
});

