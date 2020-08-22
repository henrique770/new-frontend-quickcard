import React, { useState, useRef } from 'react';

import swal from 'sweetalert';
import FlatList from '~/components/FlatList';
import { Grid, Spacing, Text, useOutsideClick } from '~/lib';

import Layout from '~/components/Layout';
import Search from '~/components/Search';
import TextField from '~/components/TextField';
import Modal from '~/components/Modal';
import VariationList from '~/components/VariationList';
import { decks } from '~/data/fake';
import useQuery from '~/utils/queryParams';
import history from '~/services/history';

import * as U from '~/styles/utilities';

function Deck() {
  const query = useQuery();
  const [status] = useState({
    text: query.get('text'),
  });

  const [searchValue, setSearchValue] = useState('');
  const [listState, setListState] = useState(false);
  const [modalOpenDeck, setModalOpenDeck] = useState(false);
  const [modalOpenCard, setModalOpenCard] = useState(false);

  const modalDeck = useRef();
  const modalCard = useRef();

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

  function deleteDeck() {
    swal({
      title: 'Tem certeza que quer deletar?',
      text: 'Uma vez excluído, você não poderá recuperar esse baralho!',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('O baralho foi excluído com sucesso!', {
          icon: 'success',
        });
      }
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
            <U.ButtonResponsive
              bgColor="#fe650e"
              radius="4px"
              onClick={() => setModalOpenDeck(true)}
            >
              <Text size={1.4}>Adicionar baralho</Text>
            </U.ButtonResponsive>{' '}
            <U.ButtonResponsive
              bgColor="#fe650e"
              radius="4px"
              onClick={() => setModalOpenCard(true)}
            >
              <Text size={1.4}>Adicionar cartão</Text>
            </U.ButtonResponsive>
          </Grid>
        </Grid>

        <Spacing mb={2.2} />
        <Grid>
          <U.NoteGridContainer list={listState}>
            {decks.map((item) => {
              return (
                <FlatList
                  link="/deck/card"
                  remove={() => deleteDeck(item.id)}
                  deck={
                    <Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>Cartões:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.cards}
                          </Text>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>A revisar:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.review}
                          </Text>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Text>Revisados:</Text>
                        </Grid>
                        <Grid item>
                          <Text weight="bold" color="#fe650e">
                            {item.reviewed}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  }
                  title={item.title}
                  previewText={item.text}
                  textFooter={item.block_name}
                />
              );
            })}
          </U.NoteGridContainer>
        </Grid>
      </Layout>
      {/* modal adicionar baralho */}
      {modalOpenDeck && (
        <Modal size={50} onClose={() => setModalOpenDeck(false)}>
          <U.FormCard ref={modalDeck}>
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
                <Text size={1.4}>Salvar</Text>
              </U.ButtonResponsive>
            </Grid>
          </U.FormCard>
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
                <Text size={1.4}>Salvar</Text>
              </U.ButtonResponsive>
            </Grid>
          </U.FormCard>
        </Modal>
      )}
    </>
  );
}

export default Deck;
