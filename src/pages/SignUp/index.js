import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import { ThemeContext } from 'styled-components';
import { Grid, Button, Text, Spacing } from '~/lib';
import history from '~/services/history';

import TextField from '~/components/TextField';

import Loading from '~/components/Loading';
import welcomeImage from '~/assets/img/background.jpg';
import whiteLogo from '~/assets/img/white_main_logo.png';
import darkLogo from '~/assets/img/logo_quickcard.png';
import * as S from './styled';
import api from '~/services/api';

import * as U from '~/styles/utilities';

import validations from './validations';

toast.configure();

function SignUp() {
  const themeContext = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  async function handleSubmitForm({ name, email, password }) {
    setLoading(true);
    try {
      await api.post('/student', { name, email, password });
      toast.success('cadastro feito com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/login');
    } catch {
      toast.error('falha no cadastro', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  }

  return (
    <S.Container>
      <Grid container xs={12}>
        <Grid item xs={12} md={6} lg={8}>
          <U.Responsive width="960px" dsLess="none" dsGreater="block">
            <S.ImageContainer>
              <img style={{ zIndex: 999 }} src={welcomeImage} alt="welcome" />
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
                    <img
                      style={{ width: 230 }}
                      src={themeContext.mode === 'dark' ? whiteLogo : darkLogo}
                      alt="logo"
                    />
                  </Grid>

                  <Spacing mb={3} />

                  <TextField
                    id="outlined-basic"
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                    error={errors.name && touched.name ? errors.name : null}
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />

                  <Spacing mt={1} />

                  <TextField
                    id="outlined-basic"
                    label="E-mail"
                    type="email"
                    placeholder="Digite seu e-mail"
                    error={errors.email && touched.email ? errors.email : null}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  <Spacing mt={1} />

                  <TextField
                    id="outlined-basic"
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
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
                        <Grid container justify="center" alignItems="center">
                          <Loading />
                          <Spacing mr={1} />
                          Cadastrando..
                        </Grid>
                      ) : (
                        <>Criar conta</>
                      )}
                    </Text>
                  </Button>
                  <Spacing mt={2} />
                  <Grid container justify="center">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Text color="#ff6400">Já tenho conta</Text>
                    </Link>
                  </Grid>
                </S.Form>
              </>
            )}
          </Formik>
        </S.GridForm>
      </Grid>
    </S.Container>
  );
}

export default SignUp;
