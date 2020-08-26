import React, { useContext, useState } from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowBack, Close } from '@styled-icons/material-outlined';

import history from '~/services/history';
import { Grid, Spacing, Text, Card, GetSizeScreen } from '~/lib';

import Layout from '~/components/Layout';

import TextField from '~/components/TextField';

import TextEditor from '~/components/TextEditor';

import * as U from '~/styles/utilities';
import * as S from './styled';

function Note() {
  const themeContext = useContext(ThemeContext);
  const { width } = GetSizeScreen();

  const [, setNoteEditor] = useState('');
  const [addCardSession, setAddCardSession] = useState(false);

  function handleNote(e, editor) {
    const noteEditorData = editor.getData();
    setNoteEditor(noteEditorData);
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

        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={4}>
            <U.Title component="h1">Nome da anotação</U.Title>
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
                    {width > 768 ? <Close size={25} color="#fff" /> : `Fechar`}
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
            <TextEditor onChange={handleNote} />
          </Grid>
          {addCardSession && (
            <Grid item xs={12} md={4}>
              <U.FormCard>
                <Text component="h1" size={1.8}>
                  Adicionar cartão
                </Text>
                <Spacing mb={3} />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="filled-select-currency-native"
                      select
                      label="Nome do baralho"
                      SelectProps={{
                        native: true,
                      }}
                      name="status"
                    >
                      <option selected disabled>
                        Selecione
                      </option>
                      <option value="active">Javascript</option>
                      <option value="inactive">
                        Expressões / frases em inglês
                      </option>
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Frente"
                      type="text"
                      placeholder="Digite a frente do cartão"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      multiline
                      label="Verso"
                      type="text"
                      placeholder="Digite o verso do cartão"
                    />
                  </Grid>
                </Grid>
                <Spacing mb={3} />
                <Grid container justify="flex-end" alignItems="flex-end">
                  <U.ButtonResponsive
                    bgColor="#fe650e"
                    radius="4px"
                    onClick={() => setAddCardSession(true)}
                  >
                    <Text size={1.4}>Adicionar cartão</Text>
                  </U.ButtonResponsive>
                </Grid>
              </U.FormCard>
            </Grid>
          )}
        </S.GridAnnotation>
        <Grid />
      </Layout>
    </>
  );
}

export default Note;
