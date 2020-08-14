import React from 'react';

import { SearchOutline } from '@styled-icons/evaicons-outline';

import swal from 'sweetalert';
import FlatList from '~/components/FlatList';
import { Grid, Input, Spacing, Text } from '~/lib';

import Layout from '~/components/Layout';
import { decks } from '~/data/fake';

import * as U from '~/styles/utilities';

function Deck() {
  function deleteDeck() {
    swal({
      title: 'Tem certeza que quer deletar?',
      text: 'Uma vez excluído, você não poderá recuperar esse baralho!',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('O baralho foi excluído com sucesso!', {
          icon: 'success',
        });
      }
    });
  }
  return (
    <>
      <Layout
        childrenTitle={<U.Title component="h1">Baralhos</U.Title>}
        childrenHeader={
          <U.Responsive width="1180px" dsGreater="block" dsLess="none">
            <Input
              icon={<SearchOutline size={17} color="#636D73" />}
              type="email"
              padding="1rem 1.6rem 1rem 4.6rem"
              radius="8px"
              placeholder="Pesquisar baralho"
            />
          </U.Responsive>
        }
      >
        <U.Responsive width="1180px" dsGreater="none" dsLess="block">
          <U.Responsive width="769px" dsGreater="none" dsLess="block">
            <U.Title component="h1">Baralhos</U.Title>
          </U.Responsive>

          <Spacing mt={2} mb={2.2}>
            <Grid item xs={12}>
              <Input
                icon={<SearchOutline size={17} color="#636D73" />}
                type="email"
                padding="1rem 1.6rem 1rem 4.6rem"
                radius="8px"
                placeholder="Pesquisar baralho"
              />
            </Grid>
          </Spacing>
        </U.Responsive>
        <Spacing mb={1} />
        <Grid>
          <U.NoteGridContainer>
            {decks.map((item) => {
              return (
                <FlatList
                  remove={() => deleteDeck(item.id)}
                  deck={
                    <Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>Cartões:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.cards}
                          </Text>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>A revisar:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.review}
                          </Text>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>Revisados:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.reviewed}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  }
                  title={item.title}
                  previewText={item.text}
                  textFooter={item.block_name}
                />
              );
            })}
          </U.NoteGridContainer>
        </Grid>
      </Layout>
    </>
  );
}

export default Deck;
