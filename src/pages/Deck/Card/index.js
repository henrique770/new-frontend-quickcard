import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';
import { useParams } from 'react-router-dom';

import ReactCardFlip from 'react-card-flip';
import history from '~/services/history';
import { Grid, Spacing, Text, Card, useOutsideClick, Button } from '~/lib';
import api from '~/services/api';
import Modal from '~/components/Modal';
import TextField from '~/components/TextField';
import { AuthContext } from '~/context/AuthContext';
import * as U from '~/styles/utilities';
import * as S from './styled';

function FlashCard() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState({});

  const [isShow, setIsShow] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  //  const [endQuiz, setEndQuiz] = useState(false);
  const card = cards[cardIndex] === undefined ? '' : cards[cardIndex];

  function showAnswer() {
    setIsShow(!isShow);
  }

  function nextCard() {
    setIsShow(false);
    if (cardIndex + 1 < deck.card.length) {
      setCardIndex(cardIndex + 1);
    }

    if (cardIndex + 1 === deck.card.length) {
      setCardsVisible(false);
      setIsShow(false);
      //  setEndQuiz(true);
    }
  }

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get(`deck/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;
      setDeck(data);
      setCards(data.card);
    } catch {}
  }, [id, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const themeContext = useContext(ThemeContext);

  const [modalOpen, setModalOpen] = useState(false);

  const modal = useRef();

  useOutsideClick(modal, () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  });

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

            <Spacing mb={5} />

            <S.CardContainer>
              {cardsVisible && (
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
                          {card.front}
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
                          {card.verse}
                        </Text>
                      </S.FlashCard>
                    </ReactCardFlip>

                    <Spacing mb={3} />
                    {isShow && (
                      <Grid container xs={12} justify="center" spacing={2}>
                        <Grid item>
                          <U.ButtonResponsive
                            radius="8px"
                            onClick={() => nextCard()}
                            bgColor={themeContext.backgroundSecondary}
                            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                            padding="1rem"
                            style={{ height: 60, width: 80 }}
                          >
                            <Text color="#fe650e" weight="bold">
                              Difícil
                            </Text>
                            <Text
                              size={1.2}
                              weight="bold"
                              color={themeContext.textColorSecondary}
                            >
                              10min
                            </Text>
                          </U.ButtonResponsive>
                        </Grid>
                        <Grid item>
                          <U.ButtonResponsive
                            radius="8px"
                            onClick={() => nextCard()}
                            bgColor={themeContext.backgroundSecondary}
                            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                            padding="1rem"
                            style={{ height: 60, width: 80 }}
                          >
                            <Text color="#fe650e" weight="bold">
                              Bom
                            </Text>

                            <Text
                              size={1.2}
                              weight="bold"
                              color={themeContext.textColorSecondary}
                            >
                              1d
                            </Text>
                          </U.ButtonResponsive>
                        </Grid>
                        <Grid item>
                          <U.ButtonResponsive
                            radius="8px"
                            onClick={() => nextCard()}
                            bgColor={themeContext.backgroundSecondary}
                            shadow="0px 1px 8px rgba(20, 46, 110, 0.1)"
                            padding="1rem"
                            style={{ height: 60, width: 80 }}
                          >
                            <Text color="#fe650e" weight="bold">
                              Fácil
                            </Text>
                            <Text
                              size={1.2}
                              weight="bold"
                              color={themeContext.textColorSecondary}
                            >
                              2d
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
