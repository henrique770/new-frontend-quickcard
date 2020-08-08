import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Grid, Button, Text, Spacing } from '~/lib';

import welcomeImage from '~/assets/img/background.jpg';
import logo from '~/assets/img/logo_quickcard.png';
import * as S from './styled';

import { signInRequest } from '~/store/modules/auth/actions';

import * as U from '~/styles/utilities';

import validations from './validations';
import Loading from '~/components/Loading';

function Login() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  function handleSubmitForm({ email, password }) {
    setLoading(true);
    try {
      dispatch(signInRequest(email, password));
    } catch {}
    setLoading(false);
  }
  return (
    <S.Container>
      <Grid container xs={12}>
        <Grid item xs={12} md={6} lg={8}>
          <U.Responsive width="768px" dsLess="none" dsGreater="block">
            <S.ImageContainer>
              <img src={welcomeImage} alt="welcome" />
            </S.ImageContainer>
          </U.Responsive>
        </Grid>

        <S.GridForm item xs={12} md={6} lg={4} container>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmitForm}
            validationSchema={validations()}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
            }) => (
              <>
                <S.Form onSubmit={handleSubmit}>
                  <Grid container justify="center">
                    <img style={{ width: 230 }} src={logo} alt="logo" />
                  </Grid>

                  <Spacing mb={3} />

                  <Text size={1.4} weight="normal">
                    Email
                  </Text>

                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Digite seu email"
                  />

                  <Spacing mt={1} />

                  <Text size={1.4} weight="normal">
                    Senha
                  </Text>

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Digite a sua senha"
                  />
                  <Spacing mt={2} />
                  <Button
                    bgColor="#ff6400"
                    style={{ width: '100%' }}
                    radius="4px"
                    padding="1.5rem"
                  >
                    <Text color="#fff" weight="bold">
                      {loading ? (
                        <Grid container alignItems="center">
                          <Loading />
                          <Spacing mr={1} />
                          Enviando..
                        </Grid>
                      ) : (
                        <>Entrar</>
                      )}
                    </Text>
                  </Button>
                </S.Form>
              </>
            )}
          </Formik>
        </S.GridForm>
      </Grid>
    </S.Container>
  );
}

export default Login;
