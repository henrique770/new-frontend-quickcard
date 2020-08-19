import React, { useState } from 'react';

import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { List, GridOn } from '@styled-icons/material-outlined';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, Button } from '~/lib';
import history from '~/services/history';
import Layout from '~/components/Layout';
import Search from '~/components/Search';
import { notes } from '~/data/fake';
import useQuery from '~/utils/queryParams';

import * as U from '~/styles/utilities';

function Dash() {
  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });

  const [searchValue, setSearchValue] = useState('');

  const OnChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const HandleSearch = (e) => {
    e.preventDefault();

    history.push(`?text=${searchValue}`);
  };

  const resetSearch = () => {
    history.push(`/`);
    window.location.reload(false);
  };

  function deleteNote() {
    swal({
      title: 'Tem certeza que quer deletar?',
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
      <Layout
        childrenTitle={<U.Title component="h1">Todas as notas</U.Title>}
        childrenHeader={
          <U.Responsive width="1180px" dsGreater="block" dsLess="none">
            <Search
              query={status.text}
              onSubmit={HandleSearch}
              onChange={OnChangeSearch}
              resetFunc={resetSearch}
              placeholder="Pesquisar anotação"
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
              <Search
                query={status.text}
                onSubmit={HandleSearch}
                onChange={OnChangeSearch}
                resetFunc={resetSearch}
                placeholder="Pesquisar anotação"
              />
            </Grid>
          </Spacing>
        </U.Responsive>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Spacing ds="flex">
              <Button padding="0.7rem" bgColor="#fff" radius="4px">
                <GridOn size={20} color="#fe650e" />
              </Button>
              <Spacing mr={1} />
              <Button padding="0.7rem" bgColor="#fff" radius="4px">
                <List size={20} color="#fe650e" />
              </Button>
            </Spacing>
          </Grid>

          <Grid item xs={12} sm={4} style={{ textAlign: 'end' }}>
            <Link to="/note">
              <U.ButtonResponsive bgColor="#fe650e" radius="4px">
                <Text size={1.4}>Adicionar nota</Text>
              </U.ButtonResponsive>
            </Link>
          </Grid>
        </Grid>
        <Spacing mb={2.2} />
        <Grid>
          <U.NoteGridContainer>
            {notes.map((item) => {
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

export default Dash;
