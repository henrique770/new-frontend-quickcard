import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { ArrowBack, Close } from '@styled-icons/material-outlined';

import { Formik } from 'formik';

import Repository, { typeRepository } from '~/context/Repository';
import history from '~/services/history';
import { Grid, Spacing, Text, Card, GetSizeScreen } from '~/lib';

import Layout from '~/components/Layout';

import TextEditor from '~/components/TextEditor';

import * as U from '~/styles/utilities';
import * as S from './styled';
import { AuthContext } from '~/context/AuthContext';
import AddCard from '~/pages/Deck/Modals/AddCard';

const NotePadRepository = new Repository(typeRepository.NOTEPAD);
const NoteRepository = new Repository(typeRepository.NOTE);

function Note() {
  // note
  const { id } = useParams();

  console.log(id);

  const { token } = useContext(AuthContext);

  const themeContext = useContext(ThemeContext);
  const { width } = GetSizeScreen();

  // notepads request

  const [notepads, setNotePads] = useState([]);
  // const [note, setNote] = useState([]);

  const [initialValues, setInitialValues] = useState({
    title: '',
    notepad: '' || undefined,
    content: '',
  });

  // console.log(note);

  const fetchDataNotePads = useCallback(() => {
    NotePadRepository.all()
      .then((data) => {
        setNotePads(data);
      })
      .catch(() => {});
  }, []);

  const fetchDataNote = useCallback(() => {
    NoteRepository.getById(id)
      .then((data) => {
        setInitialValues({ title: data.Title, content: data.Content });
        // setNote(data);
      })
      .catch(() => {});
  }, [id]);

  useEffect(() => {
    NotePadRepository.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    NoteRepository.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (id !== undefined) {
      fetchDataNote();
    }

    fetchDataNotePads();
  }, [fetchDataNotePads, fetchDataNote, token, id]);

  // editor data

  const [noteEditor, setNoteEditor] = useState('');
  const [addCardSession, setAddCardSession] = useState(false);

  function handleNote(e, editor) {
    const noteEditorData = editor.getData();
    setNoteEditor(noteEditorData);
  }

  async function handleSubmitForm(values) {
    NoteRepository.add({
      Title: values.title,
      IdNotePad: values.notepad,
      Content: noteEditor,
      IsEmptyTitle: false,
    });

    console.log(values);

    // IdNotePad, content, Title;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        enableReinitialize
      >
        {({ handleSubmit, handleBlur, handleChange, values }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Layout noHeader>
                <Spacing mt={4} mb={4}>
                  <Grid
                    spacing={3}
                    container
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <U.ButtonNoBorder type="submit">
                        <Card
                          style={{ cursor: 'pointer' }}
                          onClick={history.goBack}
                          radius="8"
                          paddingBody="0.8rem 1.5rem 0.8rem 0.8rem"
                          shadow="none"
                        >
                          <Grid container alignItems="center">
                            <ArrowBack
                              size={20}
                              color={themeContext.textColorSecondary}
                            />
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
                      </U.ButtonNoBorder>
                    </Grid>
                    <Grid item>
                      <U.Select
                        name="notepad"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.notepad}
                      >
                        <option value="" selected>
                          Selecione um bloco de nota
                        </option>

                        {notepads.map((item) => {
                          if (item.IsActive === true) {
                            return <option value={item.Id}>{item.Name}</option>;
                          }
                          return '';
                        })}
                      </U.Select>
                    </Grid>
                  </Grid>
                </Spacing>

                <Grid container justify="space-between" spacing={3}>
                  <Grid item xs={12} sm={8}>
                    <U.TitleInput
                      placeholder="Nome da anotação"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                    {/* <pre style={{ fontSize: 16 }}>
                      {JSON.stringify(values, null, 2)}
                    </pre> */}
                  </Grid>
                  <Grid item xs={12} sm={4} style={{ textAlign: 'end' }}>
                    <U.ButtonResponsive
                      bgColor="#fe650e"
                      radius="4px"
                      padding={addCardSession && width > 768 && `0.5rem`}
                      onClick={
                        addCardSession
                          ? () => setAddCardSession(false)
                          : () => setAddCardSession(true)
                      }
                    >
                      <Text size={1.4} weight="bold">
                        {addCardSession ? (
                          <>
                            {width > 768 ? (
                              <Close size={25} color="#fff" />
                            ) : (
                              `Fechar`
                            )}
                          </>
                        ) : (
                          `Adicionar cartão`
                        )}
                      </Text>
                    </U.ButtonResponsive>
                  </Grid>
                </Grid>

                <Spacing mb={2.2} />
                <S.GridAnnotation container spacing={3}>
                  <Grid item xs={12} md={addCardSession ? 8 : 12}>
                    <TextEditor
                      onChange={handleNote}
                      data={initialValues.content}
                    />
                  </Grid>
                  {addCardSession && (
                    <Grid item xs={12} md={4}>
                      <AddCard />
                    </Grid>
                  )}
                </S.GridAnnotation>
                <Grid />
              </Layout>
            </form>
          </>
        )}
      </Formik>
    </>
  );
}

export default Note;
