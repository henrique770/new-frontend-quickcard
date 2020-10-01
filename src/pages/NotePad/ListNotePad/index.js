import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';
import swal from 'sweetalert';
import history from '~/services/history';
import { Grid, Spacing, Text, Card } from '~/lib';

import Layout from '~/components/Layout';
import FlatList from '~/components/FlatList';
import VariationList from '~/components/VariationList';
import { notesblock } from '~/data/fake';

import * as U from '~/styles/utilities';

function ListNotePad() {
  const themeContext = useContext(ThemeContext);
  const [listState, setListState] = useState(false);

  function deleteNote() {
    swal({
      title: 'Você tem certeza que quer excluir?',
      text: 'Uma vez excluído, você não poderá recuperar essa anotação!',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('A anotação foi excluída com sucesso!', {
          icon: 'success',
        });
      }
    });
  }

  return (
    <>
      <Layout noHeader>
        <Spacing mt={4} mb={4}>
          <Grid container justify="space-between" xs={12}>
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
            <U.Responsive width="520px" dsGreater="block" dsLess="none">
              <VariationList
                Gridfunc={() => setListState(false)}
                Listfunc={() => setListState(true)}
              />
            </U.Responsive>
          </Grid>
        </Spacing>

        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={4}>
            <U.Title component="h1">Notas do bloco</U.Title>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'end' }}>
            <Link to="/note">
              <U.ButtonResponsive bgColor="#fe650e" radius="4px">
                <Text size={1.4} weight="bold">
                  Adicionar nota ao bloco
                </Text>
              </U.ButtonResponsive>
            </Link>
          </Grid>
        </Grid>
        <Spacing mb={2.2} />
        <Grid>
          <U.NoteGridContainer list={listState}>
            {notesblock.map((item) => {
              return (
                <FlatList
                  link="/note"
                  remove={() => deleteNote(item.id)}
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

export default ListNotePad;
