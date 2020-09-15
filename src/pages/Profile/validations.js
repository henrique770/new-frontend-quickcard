import * as yup from 'yup';

export default function validations() {
  return yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),

    oldPassword: yup
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres'),

    // id do usuário
    password: yup.string().when('oldPassword', {
      is: (val) => !!val,
      then: yup
        .string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .required('A nova senha é obrigatória')
        .nullable(),
      otherwise: yup.string().nullable(),
    }),

    confirmPassword: yup.string().when('password', {
      is: (val) => !!val,
      then: yup
        .string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .required('É obrigatório confirmar a senha')
        .oneOf([yup.ref('password'), null], 'A senhas não conferem')
        .nullable(),
      otherwise: yup.string().nullable(),
    }),
  });
}
