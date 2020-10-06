/* eslint-disable import/no-unresolved */
import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';

import ReactCardFlip from 'react-card-flip';
import Reposioty, { typeRepository } from 'context/Repository';
import history from '~/services/history';
import { Grid, Spacing, Text, Card, useOutsideClick, Button } from '~/lib';
import Modal from '~/components/Modal';
import TextField from '~/components/TextField';
import { AuthContext } from '~/context/AuthContext';
import * as U from '~/styles/utilities';
import * as S from './styled';
import Empty from '~/components/Empty';

const repositoryDeck = new Reposioty(typeRepository.DECK);
const repositoryCard = new Reposioty(typeRepository.CARD);

function FlashCard() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [isCardView, setIsCardView] = useState(false);
  const [isDeckEmpty, setIsDeckEmpty] = useState(false);
  const [isRevisedDeck, setIsRevisedDeck] = useState(false);

  const themeContext = useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const modal = useRef();
  const [isShow, setIsShow] = useState(false);

  const fetchData = useCallback(async () => {
    repositoryDeck.getById(id).then((data) => {
      validatedDeck(data);
    });
  }, [id]);

  // console.log(deck);

  function validatedDeck(data) {
    // console.log(data);
    // console.log(data.isEmpty());

    setIsRevisedDeck(data.checkRevisedDeck());
    setIsDeckEmpty(data.isEmpty());
    setDeck(data);

    const card = data.getDeckRandom();

    setIsCardView(card != null);
    if (card != null) {
      setCard(card);
    }

    // console.log(card);
  }

  useEffect(() => {
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

  useOutsideClick(modal, () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  });

  function showAnswer() {
    setIsShow(!isShow);
  }

  function updateCard() {
    showAnswer(true);

    repositoryCard
      .update(card)
      .then(() => {
        validatedDeck(deck);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function reviewCards() {
    deck.reviewCards();
    repositoryCard
      .update(deck.Cards)
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log(err));
  }

  function hitCardGood() {
    card.hitGood();
    updateCard();
  }

  function hitCardDifficult() {
    card.hitDifficult();
    updateCard();
  }

  function hitCardEasy() {
    card.hitEasy();
    updateCard();
  }

  return (
    <>
      {modalOpen && (
        <Modal size={50} onClose={() => setModalOpen(false)}>
          <U.FormCard ref={modal}>
            <Text component="h1" size={1.8}>
              Editar cartão
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
                  onClick={() => setModalOpen(true)}
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

      <U.Wrapper>
        <U.MainContent>
          <U.ContainerLimit>
            <Spacing mt={4}>
              <Grid container justify="space-between">
                <Grid>
                  <Card
                    style={{ cursor: 'pointer' }}
                    onClick={history.goBack}
                    radius="8"
                    paddingBody="0.8rem 1.5rem 0.8rem 0.8rem"
                    shadow="none"
                  >
                    <Grid container alignItems="center">
                      <ArrowBack
                        size={20}
                        color={themeContext.textColorSecondary}
                      />
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
                  <Spacing mb={2} />
                </Grid>
                <Grid xs={12} sm={4} style={{ textAlign: 'end' }}>
                  <U.ButtonResponsive
                    bgColor="#fe650e"
                    radius="4px"
                    disabled={!isCardView}
                    onClick={() => setModalOpen(true)}
                  >
                    <Text size={1.4} weight="bold">
                      Editar cartão
                    </Text>
                  </U.ButtonResponsive>
                </Grid>
              </Grid>
            </Spacing>
            <Spacing breakpoint="600px" responsiveM="2rem 0 0 0">
              <Grid container justify="center" xs={12}>
                <Grid item>
                  <U.Title component="h1">{deck.name}</U.Title>
                </Grid>
              </Grid>
            </Spacing>

            <Spacing breakpoint="600px" responsiveM="2rem 0 0 0">
              <Grid container justify="center" xs={12}>
                <Grid item>
                  {isCardView && <U.Title component="h1">{deck._name}</U.Title>}
                </Grid>
              </Grid>
            </Spacing>

            <Spacing mb={5} />

            <S.CardContainer>
              {isDeckEmpty && <Empty />}

              {isRevisedDeck && (
                <S.ContainerEndDeck>
                  <Grid
                    container
                    xs={12}
                    justify="center"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid
                      xs={12}
                      sm={6}
                      lg={3}
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                    >
                      <Text size="4" weight="bold">
                        Parabéns!! você terminou de responder o baralho
                      </Text>
                      <Grid xs={12} sm={8}>
                        <Spacing mt={1} />

                        <Link to="/deck">
                          <Button
                            type="button"
                            radius="25px"
                            style={{ width: '100%' }}
                            padding="1rem 2rem"
                            bgColor="#fe650e"
                          >
                            <Text size={1.4} weight="bold">
                              Voltar para página inicial
                            </Text>
                          </Button>
                        </Link>

                        <Spacing mt={1} />
                        <Button
                          type="button"
                          radius="25px"
                          style={{ width: '100%' }}
                          padding="1rem 2rem"
                          bgColor="#fe650e"
                          onClick={() => {
                            reviewCards();
                          }}
                        >
                          <Text size={1.4} weight="bold">
                            Revisar novamente o baralho
                          </Text>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </S.ContainerEndDeck>
              )}

              {isCardView && (
                <Grid container xs={12} justify="center" alignItems="center">
                  <Grid xs={12} sm={6} lg={4}>
                    <ReactCardFlip
                      isFlipped={isShow}
                      flipDirection="horizontal"
                    >
                      <S.FlashCard
                        noFlex
                        textCenter
                        paddingBody="3rem"
                        radius="10"
                        justifyContent="center"
                        onClick={showAnswer}
                      >
                        <S.TitleCard color="#fe650e" weight="bold">
                          Frente
                        </S.TitleCard>

                        <Text size={3} weight="bold">
                          {card.Front}
                        </Text>
                      </S.FlashCard>

                      <S.FlashCard
                        noFlex
                        textCenter
                        paddingBody="3rem"
                        radius="10"
                        justifyContent="center"
                        onClick={showAnswer}
                      >
                        <S.TitleCard color="#fe650e" weight="bold">
                          Verso
                        </S.TitleCard>
                        <Text size={3} weight="bold">
                          {card.Verse}
                        </Text>
                      </S.FlashCard>
                    </ReactCardFlip>

                    <Spacing mb={3} />
                    {isShow && (
                      <Grid container xs={12} justify="center" spacing={2}>
                        <Grid item>
                          <U.ButtonResponsive
                            radius="8px"
                            bgColor={themeContext.backgroundSecondary}
                            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                            padding="1rem"
                            style={{ height: 60, width: 80 }}
                            onClick={hitCardDifficult}
                          >
                            <Text color="#fe650e" weight="bold">
                              Difícil
                            </Text>
                            <Text
                              size={1.2}
                              weight="bold"
                              color={themeContext.textColorSecondary}
                            >
                              {card.getTimeHitDifficult()}
                            </Text>
                          </U.ButtonResponsive>
                        </Grid>
                        <Grid item>
                          <U.ButtonResponsive
                            radius="8px"
                            bgColor={themeContext.backgroundSecondary}
                            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                            padding="1rem"
                            style={{ height: 60, width: 80 }}
                            onClick={hitCardGood}
                          >
                            <Text color="#fe650e" weight="bold">
                              Bom
                            </Text>

                            <Text
                              size={1.2}
                              weight="bold"
                              color={themeContext.textColorSecondary}
                            >
                              {card.getTimeHitGood()}
                            </Text>
                          </U.ButtonResponsive>
                        </Grid>
                        <Grid item>
                          <U.ButtonResponsive
                            radius="8px"
                            bgColor={themeContext.backgroundSecondary}
                            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                            padding="1rem"
                            style={{ height: 60, width: 80 }}
                            onClick={hitCardEasy}
                          >
                            <Text color="#fe650e" weight="bold">
                              Fácil
                            </Text>
                            <Text
                              size={1.2}
                              weight="bold"
                              color={themeContext.textColorSecondary}
                            >
                              {card.getTimeHitEasy()}
                            </Text>
                          </U.ButtonResponsive>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}
            </S.CardContainer>
            <Grid />
          </U.ContainerLimit>
        </U.MainContent>
      </U.Wrapper>
    </>
  );
}

export default FlashCard;
