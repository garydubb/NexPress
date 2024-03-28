import * as Yup from 'yup';

export const checkoutSchema = Yup.object().shape({
  billing: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address1: Yup.string().required('Address is required'),
    address2: Yup.string(),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    postcode: Yup.string().required('Postal Code is required'),
    email: Yup.string()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        'Invalid email address',
      )
      .email('Invalid email')
      .required('Email is required'),
    phone: Yup.string().max(15).required('Phone is required'),
    company: Yup.string(),
  }),
  shipping: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address1: Yup.string().required('Address is required'),
    address2: Yup.string(),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    postcode: Yup.string().required('Postal Code is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().max(15).required('Phone is required'),
    company: Yup.string(),
  }),
  createAccount: Yup.boolean(),
  customerNote: Yup.string(),
  billingDifferentThanShipping: Yup.boolean(),
  paymentMethod: Yup.string().required('Payment Method is required'),
});

export default checkoutSchema;
