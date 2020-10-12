import React from 'react';
import { Formik } from 'formik';
import { Text, Spacing, Grid } from '~/lib';
import TextField from '~/components/TextField';

import * as U from '~/styles/utilities';

const AddCard = ({ createCard, modalCard, decks }) => {
  // REQUESTS CARD

  // create

  return (
    <Formik
      initialValues={{
        front: '',
        verse: '',
      }}
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
