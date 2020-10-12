import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import swal from 'sweetalert';
import { Formik } from 'formik';

import Repository, { typeRepository } from 'context/Repository';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, useOutsideClick, Button } from '~/lib';
import history from '~/services/history';
import useQuery from '~/utils/queryParams';

import SkeletonLoad from '~/components/Skeleton';
import Empty from '~/components/Empty';
import Layout from '~/components/Layout';
import Modal from '~/components/Modal';
import TextField from '~/components/TextField';
import Search from '~/components/Search';
import VariationList from '~/components/VariationList';

import { AuthContext } from '~/context/AuthContext';

import * as U from '~/styles/utilities';

const NotePadRepository = new Repository(typeRepository.NOTEPAD);
const NoteRepository = new Repository(typeRepository.NOTE);

function NotePad() {
  const { token } = useContext(AuthContext);

  const [notepads, setNotePads] = useState([]);

  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });

  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [modalOpenCreate, setModalOpenCreate] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    state: false,
    id: undefined,
    values: undefined,
  });
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
    const re = new RegExp(e.target.value, 'g');

    notepads.map((item) => {
      item.IsActive = item.Name.match(re) != null;
      setEmpty(false);
      return item;
    });

    if (notepads.filter((e) => e.IsActive).length < 1) {
      // coloar regra para exibir imagem de dados
      setEmpty(true);
    }

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

  // const fetchData = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     setEmpty(false);
  //     const response = await api.get(`notePad`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const { data } = response;
  //     setNotePads(data);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 700);

  //     const hasActive = data.some((item) => item.isActive === true);
  //     if (hasActive === false) {
  //       setEmpty(true);
  //     }
  //   } catch {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 700);
  //     setEmpty(true);
  //   }
  // }, [token]);

  const fetchData = useCallback(() => {
    setLoading(true);
    setEmpty(false);

    NotePadRepository.all()
      .then((data) => {
        setNotePads(data);
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

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  useEffect(() => {
    NotePadRepository.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    NoteRepository.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchData();
  }, [fetchData, token]);

  async function createNotePad(values) {
    NotePadRepository.add({ Name: values.name })
      .then(() => {
        swal('Criado!', 'Criado com sucesso.', 'success');
        setModalOpenCreate(false);
        fetchData();
      })
      .catch(() => {
        swal('Falhou!', 'Falha na criação', 'error');
      });
  }

  // update
  // async function editNotePad(values) {
  //   try {
  //     await api.put(
  //       `notePad/${modalEdit.id}`,
  //       {
  //         Name: values.name,
  //         Id: modalEdit.id,
  //         idStudent: _id,
  //         IsActive: modalEdit.values.isActive,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     swal('Atualizou', 'Alterado com sucesso!', 'success');
  //     fetchData();
  //     setModalEdit(false);
  //   } catch {
  //     swal('Falhou', 'Falha na atualização', 'error');
  //   }
  // }

  async function editNotePad(values) {
    NotePadRepository.update({
      Name: values.Name,
      Id: values.Id,
      IsActive: values.IsActive,
    })
      .then(() => {
        swal('Alterado!', 'Alterado com sucesso.', 'success');
        fetchData();
        setModalEdit(false);
      })
      .catch(() => {
        swal('Falhou!', 'Falha na atualização.', 'error');
      });
  }

  function deleteNotePad(id) {
    swal({
      title: 'Você tem certeza que quer excluir?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          return NotePadRepository.delete(id).then(() => {
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
          {loading ? (
            <SkeletonLoad />
          ) : (
            <>
              {empty || notepads.length === 0 ? (
                <Empty />
              ) : (
                <U.NoteGridContainer list={listState}>
                  {notepads.map((item) => {
                    console.log(item);
                    if (item.IsActive === true) {
                      return (
                        <FlatList
                          edit
                          editFunc={() =>
                            setModalEdit({
                              state: true,
                              id: item.Id,
                              values: item,
                            })
                          }
                          link="/notepad/notes"
                          title={item.Name}
                          notepad={
                            <Grid>
                              <Grid container spacing={1}>
                                <Grid item>
                                  <Text>Notas:</Text>
                                </Grid>
                                <Grid item>
                                  <Text weight="bold" color="#fe650e">
                                    {item.totalNotes}
                                  </Text>
                                </Grid>
                              </Grid>
                            </Grid>
                          }
                        />
                      );
                    }
                    return '';
                  })}
                </U.NoteGridContainer>
              )}
            </>
          )}
        </Grid>
      </Layout>

      {/* modal adicionar bloco de notas */}
      {modalOpenCreate && (
        <Modal size={50} onClose={() => setModalOpenCreate(false)}>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={createNotePad}
          >
            {({ handleSubmit, handleBlur, handleChange, values }) => (
              <U.FormCard ref={modalCreate} onSubmit={handleSubmit}>
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
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
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
            )}
          </Formik>
        </Modal>
      )}

      {/* modal edição do bloco de notas */}
      {modalEdit.state && (
        <Modal size={50} onClose={() => setModalOpenCreate(false)}>
          <Formik initialValues={modalEdit.values} onSubmit={editNotePad}>
            {({ handleSubmit, handleBlur, handleChange, values }) => (
              <U.FormCard ref={modalEdition} onSubmit={handleSubmit}>
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
                      name="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Name}
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
                      type="submit"
                      style={{ width: '100%' }}
                      radius="4px"
                      bgColor="#fe650e"
                      padding="1rem"
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
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
}

export default NotePad;
