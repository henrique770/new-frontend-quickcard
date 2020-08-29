import * as yup from 'yup';

export default function validations() {
  return yup.object().shape({
    name: yup.string().required('O nome completo é obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O e-mail é obrigatório'),
    current_password: yup
      .string()
      .min(6, 'No mínimo 6 catacteres')
      .required('A senha atual é obrigatória'),
    new_password: yup
      .string()
      .min(6, 'No mínimo 6 catacteres')
      .required('A nova senha é obrigatória'),
    password_confirmation: yup
      .string()
      .min(6, 'No mínimo 6 catacteres')
      .oneOf([yup.ref('new_password'), null], 'A senhas não conferem'),
  });
}
