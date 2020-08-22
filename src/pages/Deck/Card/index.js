import React, { useContext, useState, useRef } from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';

import ReactCardFlip from 'react-card-flip';
import history from '~/services/history';
import { Grid, Spacing, Text, Card, useOutsideClick } from '~/lib';

import Modal from '~/components/Modal';
import TextField from '~/components/TextField';

import * as U from '~/styles/utilities';
import * as S from './styled';

function FlashCard() {
  const themeContext = useContext(ThemeContext);

  const [modalOpen, setModalOpen] = useState(false);

  const modal = useRef();

  useOutsideClick(modal, () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  });

  const [isShow, setIsShow] = useState(false);
  const [cardsVisible] = useState(true);
  // const [cardIndex, setCardIndex] = useState(0);
  // const [endQuiz, setEndQuiz] = useState(false);

  function showAnswer() {
    setIsShow(!isShow);
  }

  // function nextCard() {
  //   if (cardIndex + 1 < card.length) {
  //     setCardIndex(cardIndex + 1);
  //   }

  //   if (cardIndex + 1 === card.length) {
  //     setCardsVisible(false);
  //     setIsShow(false);
  //     setEndQuiz(true);
  //   }
  // }

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
            <Grid container justify="flex-end" alignItems="flex-end">
              <U.ButtonResponsive
                bgColor="#fe650e"
                radius="4px"
                onClick={() => setModalOpen(true)}
              >
                <Text size={1.4} weight="bold">
                  Salvar
                </Text>
              </U.ButtonResponsive>
            </Grid>
          </U.FormCard>
        </Modal>
      )}

      <U.Wrapper>
        <U.MainContent>
          <U.ContainerLimit>
            <Spacing mt={4} mb={4}>
              <Grid container xs={4}>
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
              </Grid>
            </Spacing>

            <Grid container justify="space-between" spacing={3}>
              <Grid item xs={12} sm={8}>
                <U.Title component="h1">Nome do baralho</U.Title>
              </Grid>
              <Grid item xs={12} sm={4} style={{ textAlign: 'end' }}>
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

            <Spacing mb={2.2} />

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
                          Oque é TCC?
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
                          Trabalho de conclusão de curso
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
