import React from 'react';
import { Formik } from 'formik';

import { Text, Spacing, Grid, Button } from '~/lib';
import TextField from '~/components/TextField';
import * as U from '~/styles/utilities';

const AddDeck = ({ editDeck, modalEditionDeck, modalEditDeck, deleteFunc }) => {
  return (
    <Formik initialValues={modalEditDeck.values} onSubmit={editDeck}>
      {({ handleSubmit, handleBlur, handleChange, values }) => (
        <U.FormCard ref={modalEditionDeck} onSubmit={handleSubmit}>
          <Text component="h1" size={1.8}>
            Editar baralho
          </Text>
          <Spacing mb={3} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Nome do baralho"
                type="text"
                placeholder="Digite o nome do baralho"
                name="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Name}
              />
            </Grid>
          </Grid>
          <Spacing mb={3} />
          <Grid
            xs={12}
            container
            direction="row"
            justify="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <Button
                type="submit"
                style={{ width: '100%' }}
                radius="4px"
                bgColor="#fe650e"
                padding="1rem"
              >
                <Text size={1.4} weight="bold">
                  Salvar
                </Text>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="button"
                style={{ width: '100%' }}
                radius="4px"
                padding="1rem"
                bgColor="#fe650e"
                onClick={deleteFunc}
              >
                <Text size={1.4} weight="bold">
                  Excluir
                </Text>
              </Button>
            </Grid>
          </Grid>
        </U.FormCard>
      )}
    </Formik>
  );
};

export default AddDeck;
