import * as yup from 'yup';

const REQUIRED_MESSAGE = 'This field must be filled';

export const addDishSchema = yup.object({
  name: yup.string().trim().required(REQUIRED_MESSAGE),
  price: yup
    .number()
    .required(REQUIRED_MESSAGE)
    .typeError('Please Provide a number'),
  description: yup.string().required(REQUIRED_MESSAGE).max(200),
});
