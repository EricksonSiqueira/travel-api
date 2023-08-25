import Joi from 'joi';

const addPassengerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

export { addPassengerSchema };
