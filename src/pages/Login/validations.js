import * as yup from 'yup';

export default function validations() {
  return yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .min(6, 'No mínimo 6 catacteres')
      .required('A senha é obrigatória'),
  });
}
