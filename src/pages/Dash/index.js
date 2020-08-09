import React from 'react';

import { SearchOutline } from '@styled-icons/evaicons-outline';

import BlockCard from '~/components/BlockCard';
import { Grid, Input, Spacing } from '~/lib';

import Layout from '~/components/Layout';
import { notes } from '~/data/fake';

import * as U from '~/styles/utilities';

function Dash() {
  return (
    <>
      <Layout
        childrenTitle={<U.Title component="h1">Dashboard</U.Title>}
        childrenHeader={
          <U.Responsive width="1180px" dsGreater="block" dsLess="none">
            <Input
              icon={<SearchOutline size={17} color="#636D73" />}
              type="email"
              padding="1rem 1.6rem 1rem 4.6rem"
              radius="8px"
              placeholder="Pesquisar baralho, anotação..."
            />
          </U.Responsive>
        }
      >
        <U.Responsive width="1180px" dsGreater="none" dsLess="block">
          <U.Responsive width="769px" dsGreater="none" dsLess="block">
            <U.Title component="h1">Todas as notas</U.Title>
          </U.Responsive>

          <Spacing mt={2} mb={2.2}>
            <Grid item xs={12}>
              <Input
                icon={<SearchOutline size={17} color="#636D73" />}
                type="email"
                padding="1rem 1.6rem 1rem 4.6rem"
                radius="8px"
                placeholder="Pesquisar baralho, anotação..."
              />
            </Grid>
          </Spacing>
        </U.Responsive>
        <Spacing mb={1} />
        <Grid>
          <U.NoteGridContainer>
            {notes.map((item) => {
              return <BlockCard title={item.title} previewText={item.text} />;
            })}
          </U.NoteGridContainer>
        </Grid>
      </Layout>
    </>
  );
}

export default Dash;
