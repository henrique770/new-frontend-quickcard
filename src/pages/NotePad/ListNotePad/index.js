import React, { useContext, useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';
import swal from 'sweetalert';
import history from '~/services/history';
import { Grid, Spacing, Text, Card } from '~/lib';
import Repository, { typeRepository } from '~context/Repository';

import { AuthContext } from '~/context/AuthContext';
import Layout from '~/components/Layout';
import FlatList from '~/components/FlatList';
import VariationList from '~/components/VariationList';

import * as U from '~/styles/utilities';

const NotePadRepository = new Repository(typeRepository.NOTEPAD);
const repositoryNote = new Repository(typeRepository.NOTE);
function ListNotePad() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const themeContext = useContext(ThemeContext);
  const [listState, setListState] = useState(false);

  const fetchData = useCallback(() => {
    // setLoading(true);
    // setEmpty(false);

    NotePadRepository.getById(id)
      .then((data) => {
        setNotes(data.Notes);
        // const hasActive = data.some((item) => item.IsActive === true);

        // if (hasActive === false) {
        //   setEmpty(true);
        // }

        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
        // setEmpty(true);
      });
  }, [id]);

  useEffect(() => {
    NotePadRepository.provaider({
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

  function deleteNote(idNote) {
    swal({
      title: 'Você tem certeza que quer excluir?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          return repositoryNote.delete(idNote).then(() => {
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
        </Grid>
      </Layout>
    </>
  );
}

export default ListNotePad;
