import React, { useState, useRef } from 'react';

import swal from 'sweetalert';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, useOutsideClick, Button } from '~/lib';
import history from '~/services/history';
import useQuery from '~/utils/queryParams';

import Layout from '~/components/Layout';
import Modal from '~/components/Modal';
import TextField from '~/components/TextField';
import Search from '~/components/Search';
import VariationList from '~/components/VariationList';
import { blocknotes } from '~/data/fake';

import * as U from '~/styles/utilities';

function NotePad() {
  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });

  const [searchValue, setSearchValue] = useState('');
  const [modalOpenCreate, setModalOpenCreate] = useState(false);
  const [modalEdit, setModalEdit] = useState({ state: false, id: undefined });
  const [listState, setListState] = useState(false);

  const modalCreate = useRef();
  const modalEdition = useRef();

  useOutsideClick(modalCreate, () => {
    if (modalOpenCreate) {
      setModalOpenCreate(false);
    }
  });

  useOutsideClick(modalEdition, () => {
    if (modalEdit) {
      setModalEdit(false);
    }
  });

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
  function deleteNotePad() {
    swal({
      title: 'Tem certeza que quer deletar?',
      text: 'Uma vez excluído, você não poderá recuperar esse bloco de notas!',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('O bloco de notas foi excluído com sucesso!', {
          icon: 'success',
        });
      }
    });
  }
  return (
    <>
      <Layout
        childrenTitle={<U.Title component="h1">Blocos de notas</U.Title>}
        childrenHeader={
          <U.Responsive width="1180px" dsGreater="block" dsLess="none">
            <Search
              query={status.text}
              onSubmit={HandleSearch}
              onChange={OnChangeSearch}
              resetFunc={resetSearch}
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
              <Search
                query={status.text}
                onSubmit={HandleSearch}
                onChange={OnChangeSearch}
                resetFunc={resetSearch}
                placeholder="Pesquisar bloco de nota"
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
            <U.ButtonResponsive
              bgColor="#fe650e"
              radius="4px"
              onClick={() => setModalOpenCreate(true)}
            >
              <Text size={1.4} weight="bold">
                Criar bloco de notas
              </Text>
            </U.ButtonResponsive>
          </Grid>
        </Grid>

        <Spacing mb={2.2} />
        <Grid>
          <U.NoteGridContainer list={listState}>
            {blocknotes.map((item) => {
              return (
                <FlatList
                  edit
                  editFunc={() => setModalEdit({ state: true, id: item.id })}
                  link="/notepad/notes"
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

      {/* modal adicionar bloco de notas */}
      {modalOpenCreate && (
        <Modal size={50} onClose={() => setModalOpenCreate(false)}>
          <U.FormCard ref={modalCreate}>
            <Text component="h1" size={1.8}>
              Adicionar bloco de notas
            </Text>
            <Spacing mb={3} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Nome do bloco de notas"
                  type="text"
                  placeholder="Digite o nome do bloco de notas"
                />
              </Grid>
            </Grid>
            <Spacing mb={3} />
            <Grid container justify="flex-end" alignItems="flex-end">
              <U.ButtonResponsive
                bgColor="#fe650e"
                radius="4px"
                onClick={() => setModalOpenCreate(true)}
              >
                <Text size={1.4}>Salvar</Text>
              </U.ButtonResponsive>
            </Grid>
          </U.FormCard>
        </Modal>
      )}

      {/* modal edição do bloco de notas */}
      {modalEdit.state && (
        <Modal size={50} onClose={() => setModalOpenCreate(false)}>
          <U.FormCard ref={modalEdition}>
            <Text component="h1" size={1.8}>
              Editar bloco de notas
            </Text>
            <Spacing mb={3} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Nome do bloco de notas"
                  type="text"
                  placeholder="Digite o nome do bloco de notas"
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
                  type="button"
                  style={{ width: '100%' }}
                  radius="4px"
                  bgColor="#fe650e"
                  padding="1rem"
                  onClick={() => {}}
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
                  onClick={() => {
                    deleteNotePad(modalEdit.id);
                    setModalEdit(false);
                  }}
                >
                  <Text size={1.4} weight="bold">
                    Excluir
                  </Text>
                </Button>
              </Grid>
            </Grid>
          </U.FormCard>
        </Modal>
      )}
    </>
  );
}

export default NotePad;
