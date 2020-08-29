import React, { useState, useContext } from 'react';
import { ArrowBack, AddAPhoto } from '@styled-icons/material-outlined';
import { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import { Grid, Text, Card, Spacing, Button } from '~/lib';

import Layout from '~/components/Layout';
import TextField from '~/components/TextField';
import history from '~/services/history';
import DefaultProfileImage from '~/utils/ProfileImage';
import validations from './validations';
import Loading from '~/components/Loading';

import * as U from '~/styles/utilities';
import * as S from './styled';

function Profile() {
  const themeContext = useContext(ThemeContext);
  const [isShown, setIsShown] = useState(false);

  // file

  const [filePreview, setFilePreview] = useState({ link: null });

  const PutImage = (e) => {
    setFilePreview({ ...e, link: URL.createObjectURL(e.target.files[0]) });
  };

  const [loading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    current_password: '',
    new_password: '',
    password_confirmation: '',
  };

  function handleSubmitForm({ email, password }) {}

  return (
    <>
      <Layout noHeader>
        <Spacing mt={4} mb={4}>
          <Grid container xs={4}>
            <Card
              style={{ cursor: 'pointer' }}
              onClick={history.goBack}
              radius="8"
              paddingBody="0.8rem 1.5rem 0.8rem 0.8rem"
              shadow="none"
            >
              <Grid container alignItems="center">
                <ArrowBack size={20} color={themeContext.textColorSecondary} />
                <Spacing mr={1} />
                <Text
                  component="h1"
                  size={1.4}
                  color={themeContext.textColorSecondary}
                >
                  Voltar
                </Text>
              </Grid>
            </Card>
          </Grid>
        </Spacing>
        <U.Title component="h1">Perfil</U.Title>
        <Spacing mb={2.2} />
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
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <U.FormCard>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Nome completo"
                            type="text"
                            placeholder="Digite seu nome completo"
                            error={
                              errors.name && touched.name ? errors.name : null
                            }
                            helperText={
                              errors.name && touched.name ? errors.name : null
                            }
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            placeholder="Digite seu email"
                            error={
                              errors.email && touched.email
                                ? errors.email
                                : null
                            }
                            helperText={
                              errors.email && touched.email
                                ? errors.email
                                : null
                            }
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Senha atual"
                            type="password"
                            placeholder="Digite sua senha atual"
                            error={
                              errors.current_password &&
                              touched.current_password
                                ? errors.current_password
                                : null
                            }
                            helperText={
                              errors.current_password &&
                              touched.current_password
                                ? errors.current_password
                                : null
                            }
                            name="current_password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.current_password}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Nova senha"
                            type="password"
                            placeholder="Digite sua nova senha"
                            error={
                              errors.new_password && touched.new_password
                                ? errors.new_password
                                : null
                            }
                            helperText={
                              errors.new_password && touched.new_password
                                ? errors.new_password
                                : null
                            }
                            name="new_password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.new_password}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Confirmar senha"
                            type="password"
                            placeholder="Confirme sua senha"
                            error={
                              errors.password_confirmation &&
                              touched.password_confirmation
                                ? errors.password_confirmation
                                : null
                            }
                            helperText={
                              errors.password_confirmation &&
                              touched.password_confirmation
                                ? errors.password_confirmation
                                : null
                            }
                            name="password_confirmation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password_confirmation}
                          />
                        </Grid>

                        <Grid item xs={12} container justify="flex-end">
                          <Button
                            bgColor="#ff6400"
                            radius="4px"
                            padding="1rem 2rem"
                          >
                            <Text size={1.4} weight="bold">
                              {loading ? (
                                <Grid container alignItems="center">
                                  <Loading />
                                  <Spacing mr={1} />
                                  Enviando..
                                </Grid>
                              ) : (
                                <>Confirmar</>
                              )}
                            </Text>
                          </Button>
                        </Grid>
                      </Grid>
                    </U.FormCard>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <U.FormCard>
                      <Spacing mt={1.5} />
                      <Grid
                        xs={12}
                        container
                        justify="center"
                        direction="column"
                        alignItems="center"
                      >
                        <input
                          type="file"
                          id="upload-button"
                          style={{ display: 'none' }}
                          onChange={PutImage}
                        />
                        <label htmlFor="upload-button">
                          <S.ImageContainer
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            width={14}
                            height={14}
                            radius="50%"
                            cover
                          >
                            <img
                              src={
                                filePreview.link === null
                                  ? DefaultProfileImage()
                                  : filePreview.link
                              }
                              // src={profileStudent}
                              alt="profileImage"
                            />
                            {isShown && (
                              <S.IconChangeImage>
                                <AddAPhoto
                                  color={themeContext.textColorPrimary}
                                />
                              </S.IconChangeImage>
                            )}
                          </S.ImageContainer>
                        </label>

                        <Spacing mr={2} mb={2} />
                        <Grid
                          container
                          xs={12}
                          justify="center"
                          item
                          style={{ textAlign: 'center' }}
                        >
                          <div>
                            <Text component="h1" size={1.8}>
                              Henrique
                            </Text>
                            <Text
                              size={1.3}
                              component="a"
                              style={{ textDecoration: 'none' }}
                              href="mailto:"
                              color="#636D73"
                            >
                              henrique.1360@gmail.com
                            </Text>
                          </div>
                        </Grid>
                      </Grid>
                    </U.FormCard>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Formik>
      </Layout>
    </>
  );
}

export default Profile;
