import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';
import history from '~/services/history';
import { Grid, Spacing, Text, Card } from '~/lib';

import Layout from '~/components/Layout';
// import { notes } from '~/data/fake';

import * as U from '~/styles/utilities';

function Note() {
  const themeContext = useContext(ThemeContext);
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
        <U.Title component="h1">Notas</U.Title>
        <Spacing mb={2.2} />
        <Grid>
          <Text>Notas aqui!!</Text>
        </Grid>
      </Layout>
    </>
  );
}

export default Note;
