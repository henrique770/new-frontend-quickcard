import React from 'react';
import { Formik } from 'formik';

import { Text, Spacing, Grid } from '~/lib';
import TextField from '~/components/TextField';
import * as U from '~/styles/utilities';

const AddDeck = ({ modalDeck, createDeck, setModalDeck }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={createDeck}
    >
      {({ handleSubmit, handleBlur, handleChange, values }) => (
        <U.FormCard ref={modalDeck} onSubmit={handleSubmit}>
          <Text component="h1" size={1.8}>
            Adicionar baralho
          </Text>
          <Spacing mb={3} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Nome do baralho"
                type="text"
                placeholder="Digite o nome do baralho"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </Grid>
          </Grid>
          <Spacing mb={3} />
          <Grid container justify="flex-end" alignItems="flex-end">
            <U.ButtonResponsive
              bgColor="#fe650e"
              radius="4px"
              onClick={setModalDeck}
            >
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

export default AddDeck;
