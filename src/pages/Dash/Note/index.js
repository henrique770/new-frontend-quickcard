import React, { useContext, useState, useCallback, useEffect } from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowBack, Close } from '@styled-icons/material-outlined';

import swal from 'sweetalert';
import Repository, { typeRepository } from '~/context/Repository';
import history from '~/services/history';
import { Grid, Spacing, Text, Card, GetSizeScreen } from '~/lib';

import Layout from '~/components/Layout';

import TextEditor from '~/components/TextEditor';
import DeckInfo from '~/objectValues/deckInfo';
import * as U from '~/styles/utilities';
import * as S from './styled';
import { AuthContext } from '~/context/AuthContext';
import AddCard from '~/pages/Deck/Modals/AddCard';

// const repositoryNote = new Repository(typeRepository.NOTE);

const repositoryDeckInfo = new Repository({
  type: 'deck/info',
  mapper: (data) => data,
  context: DeckInfo,
});

const repositoryCard = new Repository(typeRepository.CARD);

function Note() {
  const { token } = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const { width } = GetSizeScreen();

  const [, setNoteEditor] = useState('');
  const [addCardSession, setAddCardSession] = useState(false);

  function handleNote(e, editor) {
    const noteEditorData = editor.getData();
    setNoteEditor(noteEditorData);
  }

  // get deckinfo

  const [decks, setDecks] = useState([]);

  const fetchData = useCallback(() => {
    repositoryDeckInfo
      .all()
      .then((data) => {
        setDecks(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    repositoryDeckInfo.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    repositoryCard.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchData();
  }, [fetchData, token]);

  // REQUESTS CARD

  // create
  async function createCard(values) {
    repositoryCard
      .add({
        IdDeck: values.deck,
        Front: values.front,
        Verse: values.verse,
      })
      .then(() => {
        swal('Criado!', 'Criado com sucesso.', 'success');

        fetchData();
      })
      .catch(() => {
        swal('Falhou!', 'Falha na criação.', 'error');
      });
  }

  return (
    <>
      <Layout noHeader>
        <Spacing mt={4} mb={4}>
          <Grid container xs={12} justify="space-between" alignItems="center">
            <Grid item>
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
            </Grid>
            <Grid item>
              <U.Select name="notepad">
                <option disabled selected>
                  Selecione um bloco de nota
                </option>
                <option value="value1">Teste 1</option>
                <option value="value2">Teste 2</option>
              </U.Select>
            </Grid>
          </Grid>
        </Spacing>

        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={8}>
            <U.TitleInput placeholder="Nome da anotação" />
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
              <AddCard createCard={createCard} modalCard={null} decks={decks} />
            </Grid>
          )}
        </S.GridAnnotation>
        <Grid />
      </Layout>
    </>
  );
}

export default Note;
