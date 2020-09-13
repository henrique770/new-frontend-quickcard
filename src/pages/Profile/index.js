import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ArrowBack, AddAPhoto } from '@styled-icons/material-outlined';
import { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { Grid, Text, Card, Spacing, Button } from '~/lib';

import Layout from '~/components/Layout';
import TextField from '~/components/TextField';
import history from '~/services/history';
import DefaultProfileImage from '~/utils/ProfileImage';
import validations from './validations';
import Loading from '~/components/Loading';
import api from '~/services/api';
import * as U from '~/styles/utilities';
import * as S from './styled';
import { AuthContext } from '~/context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const url = 'http://quickcard-io.herokuapp.com/api/v1';

function Profile() {
  const { user } = useContext(AuthContext);

  const themeContext = useContext(ThemeContext);
  const [isShown, setIsShown] = useState(false);

  const [loading, setLoading] = useState(false);

  const { _id } = user;

  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    oldPassword: '',
    password: '',
    confirmPassword: '',
    imgPerfil: null,
  });

  const fetchData = useCallback(async () => {
    const response = await api.get(`student/${_id}`);

    const result = response.data;

    setInitialValues({
      name: result.name ? result.name : undefined,
      email: result.email ? result.email : undefined,
    });
  }, [_id]);

  const [, setHasImage] = useState();
  const [fileUpload, setFileUpload] = useState();

  const fetchImage = useCallback(async () => {
    try {
      await api.get(`student/imgProfile/${_id}`);
      setFileUpload(`${url}/student/imgProfile/${_id}`);
    } catch {
      setHasImage(false);
      setFileUpload(null);
    }
  }, [_id]);

  useEffect(() => {
    fetchData();
    fetchImage();
  }, [fetchData, fetchImage]);

  const PutImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      const base64data = reader.result;

      setFileUpload(base64data);
    };
  };

  async function handleSubmitForm(values) {
    setLoading(true);

    try {
      const response = await api.put(`student/${_id}`, {
        Name: values.name,
        Email: values.email,
        OldPassword: values.oldPassword ? values.oldPassword : null,
        Password: values.password ? values.password : null,
        ImgPerfil: fileUpload,
      });

      toast.success('O perfil foi atualizado!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setInitialValues(response.data);
    } catch (err) {
      toast.error('Falha na atualização', {
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
          enableReinitialize
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
                            label="Nome"
                            type="text"
                            placeholder="Digite seu nome"
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
                              errors.oldPassword && touched.oldPassword
                                ? errors.oldPassword
                                : null
                            }
                            helperText={
                              errors.oldPassword && touched.oldPassword
                                ? errors.oldPassword
                                : null
                            }
                            name="oldPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.oldPassword}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Nova senha"
                            type="password"
                            placeholder="Digite sua nova senha"
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
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Confirmar senha"
                            type="password"
                            placeholder="Confirme sua senha"
                            error={
                              errors.confirmPassword && touched.confirmPassword
                                ? errors.confirmPassword
                                : null
                            }
                            helperText={
                              errors.confirmPassword && touched.confirmPassword
                                ? errors.confirmPassword
                                : null
                            }
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
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
                                fileUpload == null
                                  ? DefaultProfileImage()
                                  : fileUpload
                              }
                              // src={
                              //   hasImage
                              //     ? `${url}/student/imgProfile/${_id}`
                              //     : DefaultProfileImage()
                              // }
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
                              {initialValues.name}
                            </Text>
                            <Text
                              size={1.3}
                              component="a"
                              style={{ textDecoration: 'none' }}
                              href="mailto:"
                              color="#636D73"
                            >
                              {initialValues.email}
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
