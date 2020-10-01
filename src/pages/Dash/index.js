import React, { useState } from 'react';

import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text } from '~/lib';
import history from '~/services/history';
import Layout from '~/components/Layout';
import Search from '~/components/Search';
import VariationList from '~/components/VariationList';
import { notes } from '~/data/fake';
import useQuery from '~/utils/queryParams';

import * as U from '~/styles/utilities';

function Dash() {
  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });

  const [searchValue, setSearchValue] = useState('');
  const [listState, setListState] = useState(false);

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
      title: 'Você tem certeza que quer excluir?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then((willDelete) => {
      // if (willDelete) {
      //   api.put(
      //     `deck/${id}`,
      //     {
      //       Name: modalEditDeck.values.name,
      //       Id: id,
      //       idStudent: _id,
      //       IsActive: false,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   fetchData().catch(() => {
      //     swal('Falhou','Falha na remoção!', 'warning');
      //   });
      // }
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
          <U.Responsive width="600px" dsGreater="block" dsLess="none">
            <Grid item>
              <VariationList
                Gridfunc={() => setListState(false)}
                Listfunc={() => setListState(true)}
              />
            </Grid>
          </U.Responsive>

          <Grid item xs={12} sm={6} style={{ textAlign: 'end' }}>
            <Link to="/note">
              <U.ButtonResponsive bgColor="#fe650e" radius="4px">
                <Text size={1.4} weight="bold">
                  Adicionar nota
                </Text>
              </U.ButtonResponsive>
            </Link>
          </Grid>
        </Grid>
        <Spacing mb={2.2} />
        <Grid>
          <U.NoteGridContainer list={listState}>
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
