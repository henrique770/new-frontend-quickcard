import React, { useState, useEffect, useCallback, useContext } from 'react';

import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import Repository, { typeRepository } from 'context/Repository';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text } from '~/lib';
import history from '~/services/history';
import Layout from '~/components/Layout';
import Search from '~/components/Search';
import VariationList from '~/components/VariationList';
import Empty from '~/components/Empty';

import useQuery from '~/utils/queryParams';

import { AuthContext } from '~/context/AuthContext';
import NotePadInfo from '~/objectValues/notepadInfo';
import * as U from '~/styles/utilities';
import SkeletonLoad from '~/components/Skeleton';

const repositoryNoteInfo = new Repository({
  type: 'notepad/info',
  mapper: (data) => data,
  context: NotePadInfo,
});

const repositoryNote = new Repository(typeRepository.NOTE);

function Dash() {
  const { token } = useContext(AuthContext);
  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });

  const [notes, setNotes] = useState([]);

  console.log(notes);

  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

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

  // REQUEST NOTEPAD

  const fetchData = useCallback(() => {
    setLoading(true);
    setEmpty(false);
    repositoryNoteInfo
      .all()
      .then((data) => {
        setNotes(data);
        const hasActive = data.some((item) => item.IsActive === true);

        if (hasActive === false) {
          setEmpty(true);
        }

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setEmpty(true);
      });
  }, []);

  useEffect(() => {
    repositoryNoteInfo.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    repositoryNote.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchData();
  }, [fetchData, token]);

  function deleteNote(id) {
    swal({
      title: 'Você tem certeza que quer excluir?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          return repositoryNote.delete(id).then(() => {
            fetchData();
          });
        }
      })
      .catch(() => {
        swal('Falhou', 'Falha na remoção.', 'warning');
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
          {loading ? (
            <SkeletonLoad />
          ) : (
            <>
              {empty || notes.length === 0 ? (
                <Empty />
              ) : (
                <U.NoteGridContainer list={listState}>
                  {notes.map((item) => {
                    return (
                      <FlatList
                        link={`/note/${item.Id}`}
                        remove={() => deleteNote(item.Id)}
                        title={item.Title}
                        previewText={item.Content}
                        textFooter={item.NotePadName}
                      />
                    );
                  })}
                </U.NoteGridContainer>
              )}
            </>
          )}
        </Grid>
      </Layout>
    </>
  );
}

export default Dash;
