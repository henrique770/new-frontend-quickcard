import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import swal from 'sweetalert';

import { Formik } from 'formik';
import uniqid from 'uniqid';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, useOutsideClick, Button } from '~/lib';

import Layout from '~/components/Layout';
import Search from '~/components/Search';
import TextField from '~/components/TextField';
import Modal from '~/components/Modal';
import VariationList from '~/components/VariationList';
// import { decks } from '~/data/fake';
import Empty from '~/components/Empty';
import useQuery from '~/utils/queryParams';
import history from '~/services/history';
import api from '~/services/api';
import { AuthContext } from '~/context/AuthContext';

import * as U from '~/styles/utilities';

function Deck() {
  const { user, token } = useContext(AuthContext);
  const { _id } = user;

  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });
  const [empty, setEmpty] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [listState, setListState] = useState(false);
  const [modalOpenDeck, setModalOpenDeck] = useState(false);
  const [modalOpenCard, setModalOpenCard] = useState(false);
  const [modalEditDeck, setModalEditDeck] = useState({
    state: false,
    id: undefined,
    values: undefined,
  });

  const modalDeck = useRef();
  const modalCard = useRef();
  const modalEditionDeck = useRef();

  useOutsideClick(modalDeck, () => {
    if (modalOpenDeck) {
      setModalOpenDeck(false);
    }
  });

  useOutsideClick(modalCard, () => {
    if (modalOpenCard) {
      setModalOpenCard(false);
    }
  });

  useOutsideClick(modalEditionDeck, () => {
    if (modalEditDeck) {
      setModalEditDeck(false);
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

  const initialValuesDeck = {
    name: '',
  };

  // REQUESTS DECK

  const [decks, setDecks] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setEmpty(false);
      const response = await api.get(`deck`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;
      setDecks(data);
    } catch (err) {
      console.log(err);
      setEmpty(true);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // create
  async function createDeck(values) {
    try {
      await api.post(
        'deck',
        { Name: values.name, Id: uniqid(), idStudent: _id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('baralho criado com sucesso!');
      setModalOpenDeck(false);
      fetchData();
    } catch {
      alert('Falha na criação');
    }
  }

  // update
  async function editDeck(values) {
    try {
      await api.put(
        `deck/${modalEditDeck.id}`,
        {
          Name: values.name,
          Id: modalEditDeck.id,
          idStudent: _id,
          IsActive: modalEditDeck.values.isActive,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('baralho foi atualizado com sucesso!');
      fetchData();
      setModalEditDeck(false);
    } catch {
      alert('Falha na atualização');
    }
  }

  function deleteDeck(id) {
    swal({
      title: 'Tem certeza que quer deletar?',
      text: 'Uma vez excluído, você não poderá recuperar esse baralho!',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        api
          .put(
            `deck/${id}`,
            {
              Name: modalEditDeck.values.name,
              Id: id,
              idStudent: _id,
              IsActive: false,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            if (willDelete) {
              swal('O baralho foi excluído com sucesso!', {
                icon: 'success',
              });
              fetchData();
            }
          })
          .catch(() => {
            swal('Falhou', 'Há algo errado', 'warning');
          });
      }
    });
  }

  // console.log(modalEditDeck.id);
  return (
    <>
      <Layout
        childrenTitle={<U.Title component="h1">Baralhos</U.Title>}
        childrenHeader={
          <U.Responsive width="1180px" dsGreater="block" dsLess="none">
            <Search
              query={status.text}
              onSubmit={HandleSearch}
              onChange={OnChangeSearch}
              resetFunc={resetSearch}
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
              <Search
                query={status.text}
                onSubmit={HandleSearch}
                onChange={OnChangeSearch}
                resetFunc={resetSearch}
                placeholder="Pesquisar baralho"
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
            <Spacing ds="flex" style={{ justifyContent: 'flex-end' }}>
              <U.ActionButtons
                active={modalOpenCard}
                bgColor="#fe650e"
                radius="4px"
                padding="1rem 2rem"
                onClick={() => setModalOpenCard(true)}
              >
                <Text size={1.4} weight="bold">
                  Adicionar cartão
                </Text>
              </U.ActionButtons>
              <Spacing mr={1} />
              <U.ActionButtons
                active={modalOpenDeck}
                bgColor="#fe650e"
                radius="4px"
                padding="1rem 2rem"
                onClick={() => setModalOpenDeck(true)}
              >
                <Text size={1.4} weight="bold">
                  Criar baralho
                </Text>
              </U.ActionButtons>
            </Spacing>
          </Grid>
        </Grid>

        <Spacing mb={2.2} />
        <Grid>
          {empty || decks.length === 0 ? (
            <Empty />
          ) : (
            <U.NoteGridContainer list={listState}>
              {decks.map((item) => {
                if (item.isActive === true) {
                  return (
                    <FlatList
                      link="/deck/card"
                      edit
                      editFunc={() =>
                        setModalEditDeck({
                          state: true,
                          id: item._id,
                          values: item,
                        })
                      }
                      deck={
                        <Grid>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Text>Cartões:</Text>
                            </Grid>
                            <Grid item>
                              <Text weight="bold" color="#fe650e">
                                32
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Text>A revisar:</Text>
                            </Grid>
                            <Grid item>
                              <Text weight="bold" color="#fe650e">
                                12
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Text>Revisados:</Text>
                            </Grid>
                            <Grid item>
                              <Text weight="bold" color="#fe650e">
                                12
                              </Text>
                            </Grid>
                          </Grid>
                        </Grid>
                      }
                      title={item.name}
                    />
                  );
                }
                return '';
              })}
            </U.NoteGridContainer>
          )}
        </Grid>
      </Layout>
      {/* modal adicionar baralho */}
      {modalOpenDeck && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <Formik initialValues={initialValuesDeck} onSubmit={createDeck}>
            {({ handleSubmit, handleBlur, handleChange, values }) => (
              <U.FormCard ref={modalDeck} onSubmit={handleSubmit}>
                <Text component="h1" size={1.8}>
                  Adicionar baralho
                </Text>
                <Spacing mb={3} />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Nome do baralho"
                      type="text"
                      placeholder="Digite o nome do baralho"
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
                    onClick={() => setModalOpenDeck(true)}
                  >
                    <Text size={1.4} weight="bold">
                      Salvar
                    </Text>
                  </U.ButtonResponsive>
                </Grid>
              </U.FormCard>
            )}
          </Formik>
        </Modal>
      )}

      {/* modal editar adicionar baralho */}
      {modalEditDeck.state && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <Formik initialValues={modalEditDeck.values} onSubmit={editDeck}>
            {({ handleSubmit, handleBlur, handleChange, values }) => (
              <U.FormCard ref={modalEditionDeck} onSubmit={handleSubmit}>
                <Text component="h1" size={1.8}>
                  Editar baralho
                </Text>
                <Spacing mb={3} />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Nome do baralho"
                      type="text"
                      placeholder="Digite o nome do baralho"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
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
                        deleteDeck(modalEditDeck.id);
                        setModalEditDeck(false);
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

      {/* modal adicionar cartão */}
      {modalOpenCard && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <U.FormCard ref={modalCard}>
            <Text component="h1" size={1.8}>
              Adicionar cartão
            </Text>
            <Spacing mb={3} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="filled-select-currency-native"
                  select
                  label="Nome do baralho"
                  SelectProps={{
                    native: true,
                  }}
                  name="status"
                >
                  <option selected disabled>
                    Selecione
                  </option>
                  <option value="active">Javascript</option>
                  <option value="inactive">
                    Expressões / frases em inglês
                  </option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Frente"
                  type="text"
                  placeholder="Digite a frente do cartão"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  multiline
                  label="Verso"
                  type="text"
                  placeholder="Digite o verso do cartão"
                />
              </Grid>
            </Grid>
            <Spacing mb={3} />
            <Grid container justify="flex-end" alignItems="flex-end">
              <U.ButtonResponsive
                bgColor="#fe650e"
                radius="4px"
                onClick={() => setModalOpenDeck(true)}
              >
                <Text size={1.4} weight="bold">
                  Salvar
                </Text>
              </U.ButtonResponsive>
            </Grid>
          </U.FormCard>
        </Modal>
      )}
    </>
  );
}

export default Deck;
