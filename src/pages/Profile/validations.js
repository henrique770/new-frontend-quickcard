import * as yup from 'yup';

export default function validations() {
  return yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    current_password: yup
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .required('A senha atual é obrigatória'),
    new_password: yup
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .required('A nova senha é obrigatória'),
    password_confirmation: yup
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .oneOf([yup.ref('new_password'), null], 'A senhas não conferem'),
  });
}