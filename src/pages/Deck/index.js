import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import swal from 'sweetalert';

import { Formik } from 'formik';

import Reposioty, { typeRepository } from 'context/Repository';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, useOutsideClick, Button } from '~/lib';

import Layout from '~/components/Layout';
import Search from '~/components/Search';
import TextField from '~/components/TextField';
import Modal from '~/components/Modal';
import VariationList from '~/components/VariationList';

import SkeletonLoad from '~/components/Skeleton';
import Empty from '~/components/Empty';
import useQuery from '~/utils/queryParams';
import history from '~/services/history';

import { AuthContext } from '~/context/AuthContext';

import DeckInfo from '~/objectValues/deckInfo';
import * as U from '~/styles/utilities';

const repositoryDeckInfo = new Reposioty({
  type: 'deck/info',
  mapper: (data) => data,
  context: DeckInfo,
});
const repositoryDeck = new Reposioty(typeRepository.DECK);
const repositoryCard = new Reposioty(typeRepository.CARD);

/*
 */

function Deck() {
  const { token } = useContext(AuthContext);

  const [decks, setDecks] = useState([]);

  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const re = new RegExp(e.target.value, 'g');

    decks.map((item) => {
      item.IsActive = item.Name.match(re) != null;

      return item;
    });

    if (decks.filter((e) => e.IsActive).length < 1) {
      // coloar regra para exibir imagem de dados
      alert('Nenhum dado para o filtro do baralho');
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

  // REQUESTS DECK

  const fetchData = useCallback(() => {
    setLoading(true);
    setEmpty(false);

    repositoryDeckInfo
      .all()
      .then((data) => {
        setDecks(data);
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
    repositoryDeckInfo.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    repositoryDeck.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    repositoryCard.provaider({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchData();
  }, [fetchData, token]);

  // create
  async function createDeck(values) {
    repositoryDeck
      .add({ Name: values.name })
      .then(() => {
        swal('Criado!', 'O baralho foi criado com sucesso!', 'success');
        setModalOpenDeck(false);
        fetchData();
      })
      .catch(() => {
        swal('Falhou!', 'Falha na criação', 'error');
      });

    /*
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

      swal('Criado!', 'Baralho adicionado com sucesso!', 'success');
      setModalOpenDeck(false);
      fetchData();
    } catch {
      swal('Falhou', 'Falha na criação', 'error');
    }
    */
  }

  // console.log(decks);

  // update
  async function editDeck(values) {
    repositoryDeck
      .update({
        Name: values.Name,
        Id: values.Id,
        IsActive: values.IsActive,
      })
      .then(() => {
        swal('Atualizado!', 'O baralho foi atualizado com sucesso!', 'success');
        fetchData();
        setModalEditDeck(false);
      })
      .catch(() => {
        swal('Falhou!', 'Falha na atualização', 'error');
      });

    /*
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

      swal('Atualizou', 'Alterado com sucesso!', 'success');
      fetchData();
      setModalEditDeck(false);
    } catch {
      swal('Falhou', 'Falha na atualização', 'error');
    }
    */
  }

  function deleteDeck(id) {
    swal({
      title: 'Você tem certeza que quer excluir?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          return repositoryDeck.delete(id).then(() => {
            swal('O baralho foi excluído com sucesso!', { icon: 'success' });
            fetchData();
          });
        }
      })
      .catch(() => {
        swal('Falhou', 'Há algo errado', 'warning');
      });
  }

  // REQUESTS CARD

  // create
  async function createCard(values) {
    repositoryCard
      .add({
        IdDeck: values.deck,
        Front: values.front,
        Verse: values.verse,
      })
      .then(() => {
        swal('Criado!', 'O cartão foi criado com sucesso!', 'success');
        setModalOpenCard(false);
        fetchData();
      })
      .catch(() => {
        swal('Falhou!', 'Falha na criação', 'error');
      });
  }

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
          {loading ? (
            <SkeletonLoad />
          ) : (
            <>
              {empty || decks.length === 0 ? (
                <Empty />
              ) : (
                <U.NoteGridContainer list={listState}>
                  {decks.map((item) => {
                    if (item.IsActive === true) {
                      return (
                        <FlatList
                          link={`/deck/${item.Id}`}
                          edit
                          editFunc={() =>
                            setModalEditDeck({
                              state: true,
                              id: item.Id,
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
                                    {item.Count}
                                  </Text>
                                </Grid>
                              </Grid>
                              <Grid container spacing={1}>
                                <Grid item>
                                  <Text>A revisar:</Text>
                                </Grid>
                                <Grid item>
                                  <Text weight="bold" color="#fe650e">
                                    {item.CountNotReviewed}
                                  </Text>
                                </Grid>
                              </Grid>
                              <Grid container spacing={1}>
                                <Grid item>
                                  <Text>Revisados:</Text>
                                </Grid>
                                <Grid item>
                                  <Text weight="bold" color="#fe650e">
                                    {item.CountReviewed}
                                  </Text>
                                </Grid>
                              </Grid>
                            </Grid>
                          }
                          title={item.Name}
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
      {/* modal adicionar baralho */}
      {modalOpenDeck && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={createDeck}
          >
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
          <Formik
            initialValues={{
              front: '',
              verse: '',
            }}
            onSubmit={createCard}
          >
            {({ handleSubmit, handleBlur, handleChange, values }) => (
              <U.FormCard ref={modalCard} onSubmit={handleSubmit}>
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
                      name="deck"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.deck}
                    >
                      <option selected disabled>
                        Selecione um baralho
                      </option>
                      {decks.map((item) => {
                        if (item.IsActive === true) {
                          return <option value={item.Id}>{item.Name}</option>;
                        }
                        return '';
                      })}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Frente"
                      type="text"
                      placeholder="Digite a frente do cartão"
                      name="front"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.front}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      multiline
                      label="Verso"
                      type="text"
                      placeholder="Digite o verso do cartão"
                      name="verse"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.verse}
                    />
                  </Grid>
                </Grid>
                <Spacing mb={3} />
                <Grid container justify="flex-end" alignItems="flex-end">
                  <U.ButtonResponsive
                    type="submit"
                    bgColor="#fe650e"
                    radius="4px"
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
    </>
  );
}

export default Deck;
