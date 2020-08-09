import React from 'react';

import { SearchOutline } from '@styled-icons/evaicons-outline';

import FlatList from '~/components/FlatList';
import { Grid, Input, Spacing, Text } from '~/lib';

import Layout from '~/components/Layout';
import { blocknotes } from '~/data/fake';

import * as U from '~/styles/utilities';

function NotePad() {
  return (
    <>
      <Layout
        childrenTitle={<U.Title component="h1">Blocos de notas</U.Title>}
        childrenHeader={
          <U.Responsive width="1180px" dsGreater="block" dsLess="none">
            <Input
              icon={<SearchOutline size={17} color="#636D73" />}
              type="email"
              padding="1rem 1.6rem 1rem 4.6rem"
              radius="8px"
              placeholder="Pesquisar bloco de nota"
            />
          </U.Responsive>
        }
      >
        <U.Responsive width="1180px" dsGreater="none" dsLess="block">
          <U.Responsive width="769px" dsGreater="none" dsLess="block">
            <U.Title component="h1">Blocos de notas</U.Title>
          </U.Responsive>

          <Spacing mt={2} mb={2.2}>
            <Grid item xs={12}>
              <Input
                icon={<SearchOutline size={17} color="#636D73" />}
                type="email"
                padding="1rem 1.6rem 1rem 4.6rem"
                radius="8px"
                placeholder="Pesquisar bloco de nota"
              />
            </Grid>
          </Spacing>
        </U.Responsive>
        <Spacing mb={1} />
        <Grid>
          <U.NoteGridContainer>
            {blocknotes.map((item) => {
              return (
                <FlatList
                  title={item.title}
                  notepad={
                    <Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>Notas:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.notes}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  }
                />
              );
            })}
          </U.NoteGridContainer>
        </Grid>
      </Layout>
    </>
  );
}

export default NotePad;