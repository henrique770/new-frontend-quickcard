import React, { useCallback, useState, useEffect, useContext } from 'react';
import { Formik } from 'formik';
import swal from 'sweetalert';
import { Text, Spacing, Grid } from '~/lib';
import TextField from '~/components/TextField';
import * as U from '~/styles/utilities';
import Repository, { typeRepository } from '~/context/Repository';
import DeckInfo from '~/objectValues/deckInfo';
import { AuthContext } from '~/context/AuthContext';

const repositoryDeckInfo = new Repository({
  type: 'deck/info',
  mapper: (data) => data,
  context: DeckInfo,
});
const repositoryCard = new Repository(typeRepository.CARD);

const AddCard = ({ modalCard }) => {
  const { token } = useContext(AuthContext);
  // REQUESTS CARD

  // create

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
    <Formik
      initialValues={{
        front: '',
        verse: '',
      }}
      enableReinitialize
      onSubmit={createCard}
    >
      {({ handleSubmit, handleBlur, handleChange, values }) => (
        <U.FormCard ref={modalCard} onSubmit={handleSubmit}>
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
                name="deck"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.deck}
              >
                <option selected disabled>
                  Selecione um baralho
                </option>
                {decks.map((item) => {
                  if (item.IsActive === true) {
                    return <option value={item.Id}>{item.Name}</option>;
                  }
                  return '';
                })}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Frente"
                type="text"
                placeholder="Digite a frente do cartão"
                name="front"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.front}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                multiline
                label="Verso"
                type="text"
                placeholder="Digite o verso do cartão"
                name="verse"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.verse}
              />
            </Grid>
          </Grid>
          <Spacing mb={3} />
          <Grid container justify="flex-end" alignItems="flex-end">
            <U.ButtonResponsive type="submit" bgColor="#fe650e" radius="4px">
              <Text size={1.4} weight="bold">
                Salvar
              </Text>
            </U.ButtonResponsive>
          </Grid>
        </U.FormCard>
      )}
    </Formik>
  );
};

export default AddCard;
