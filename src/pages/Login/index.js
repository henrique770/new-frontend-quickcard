import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Grid, Button, Text, Spacing } from '~/lib';

import TextField from '~/components/TextField';
import welcomeImage from '~/assets/img/background.jpg';
import whiteLogo from '~/assets/img/white_main_logo.png';
import darkLogo from '~/assets/img/logo_quickcard.png';
import * as S from './styled';
import { AuthContext } from '~/context/AuthContext';

import * as U from '~/styles/utilities';
// import Loading from '~/components/Loading';
import validations from './validations';

function Login() {
  const themeContext = useContext(ThemeContext);
  // const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const { signIn } = useContext(AuthContext);

  function handleSubmitForm(values) {
    signIn(values);
  }
  return (
    <S.Container>
      <Grid container xs={12}>
        <Grid item xs={12} md={6} lg={8}>
          <U.Responsive width="960px" dsLess="none" dsGreater="block">
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
                    <img
                      style={{ width: 230 }}
                      src={themeContext.mode === 'dark' ? whiteLogo : darkLogo}
                      alt="logo"
                    />
                  </Grid>

                  <Spacing mb={3} />

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
                      {/* {loading ? (
                        <Grid container alignItems="center">
                          <Loading />
                          <Spacing mr={1} />
                          Entrando..
                        </Grid>
                      ) : (
                        <>Acessar</>
                      )} */}
                      Acessar
                    </Text>
                  </Button>
                  <Spacing mt={2} />
                  <Grid container justify="center">
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <Text color="#ff6400">Criar conta gratuita</Text>
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

export default Login;
