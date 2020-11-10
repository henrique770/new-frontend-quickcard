import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import swal from 'sweetalert';

import Repository, { typeRepository } from '~/context/Repository';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, useOutsideClick } from '~/lib';
import AddCard from './Modals/AddCard';
import AddDeck from './Modals/AddDeck';
import EditDeck from './Modals/EditDeck';
import Layout from '~/components/Layout';
import Search from '~/components/Search';

import Modal from '~/components/Modal';
import VariationList from '~/components/VariationList';

import SkeletonLoad from '~/components/Skeleton';
import Empty from '~/components/Empty';
import useQuery from '~/utils/queryParams';
import history from '~/services/history';

import { AuthContext } from '~/context/AuthContext';

import DeckInfo from '~/objectValues/deckInfo';
import * as U from '~/styles/utilities';

const repositoryDeckInfo = new Repository({
  type: 'deck/info',
  mapper: (data) => data,
  context: DeckInfo,
});
const repositoryDeck = new Repository(typeRepository.DECK);
const repositoryCard = new Repository(typeRepository.CARD);

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
      setEmpty(false);
      return item;
    });

    if (decks.filter((e) => e.IsActive).length < 1) {
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

  // REQUESTS DECK

  const fetchData = useCallback(() => {
    setLoading(true);
    setEmpty(false);
    
    repositoryDeckInfo
      .all()
      .then((data) => {
        console.log(data)
        setDecks(data === undefined ? [] : data);
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
        swal('Criado!', 'Criado com sucesso.', 'success');
        setModalOpenDeck(false);
        fetchData();
      })
      .catch((err) => {
        console.log(err)
        swal('Falhou!', 'Falha na criação', 'error');
      });
  }

  // update
  async function editDeck(values) {
    repositoryDeck
      .update({
        Name: values.Name,
        Id: values.Id,
        IsActive: values.IsActive,
      })
      .then(() => {
        swal('Alterado!', 'Alterado com sucesso.', 'success');
        fetchData();
        setModalEditDeck(false);
      })
      .catch(() => {
        swal('Falhou!', 'Falha na atualização.', 'error');
      });
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
                              <Grid container spacing={1}>
                                <Grid item>
                                  <Text>Disponíveis:</Text>
                                </Grid>
                                <Grid item>
                                  <Text weight="bold" color="#fe650e">
                                    {item.CardsReviewMoment}
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
          <AddDeck
            createDeck={createDeck}
            modalDeck={modalDeck}
            setModalDeck={() => setModalOpenDeck(true)}
          />
        </Modal>
      )}

      {/* modal editar adicionar baralho */}
      {modalEditDeck.state && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <EditDeck
            editDeck={editDeck}
            modalEditionDeck={modalEditionDeck}
            modalEditDeck={modalEditDeck}
            deleteFunc={() => {
              deleteDeck(modalEditDeck.id);
              setModalEditDeck(false);
            }}
          />
        </Modal>
      )}

      {/* modal adicionar cartão */}
      {modalOpenCard && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <AddCard modalCard={modalCard} />
        </Modal>
      )}
    </>
  );
}

export default Deck;
