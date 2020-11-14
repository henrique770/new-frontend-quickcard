import React, { useState, useContext, useEffect, useCallback } from 'react';

import ApexCharts from 'react-apexcharts';
import { Grid, Spacing, Text, Card } from '~/lib';

import Layout from '~/components/Layout';

import * as U from '~/styles/utilities';
import * as S from './styled';

import Repository, { typeRepository } from '~/context/Repository';
import DeckInfo from '~/objectValues/deckInfo';
import { AuthContext } from '~/context/AuthContext';

const repositoryDeckInfo = new Repository({
  type: 'deck/info',
  mapper: (data) => data,
  context: DeckInfo,
});

const repositoryDeck = new Repository(typeRepository.DECK);

const calculatePercentage = (total, perc) =>
  parseFloat(((perc * 100) / total).toFixed(1));

function Statistics() {
  const { token } = useContext(AuthContext);
  const [decks, setDecks] = useState([
    { label: 'carregando decks...', value: '' },
  ]);
  const [deckValueSelected, setDeckValueSelected] = useState('');
  const defaultValueData = [0, 0, 0];

  const [, setData] = useState([0, 0, 0]);
  const [, setCards] = useState(defaultValueData);

  const [totalAccountant, setTotalAccountant] = useState(0);
  const [cardsUnanswered, setCardsUnanswered] = useState(0);
  const [cardsGoodCount, setCardsGoodCount] = useState(0);
  const [cardsEasyCount, setCardsEasyCount] = useState(0);
  const [cardsDifficult, setCardsDifficult] = useState(0);

  const loadDataChart = useCallback(
    (idDeck) => {
      repositoryDeck.getById(idDeck).then((data) => {
        console.log(idDeck);

        if (data && data.totalCards() > 0) {
          setDataChart(data);
        } else {
          setData(defaultValueData);
        }
        console.log(data);
      });
    },
    [defaultValueData]
  );

  const fetchData = useCallback(() => {
    repositoryDeckInfo
      .all()
      .then((data) => {
        const values = data.map((deck) => {
          return {
            label: deck.Name,
            value: deck.Id,
          };
        });

        console.log(values);
        console.log(data);

        if (values.length > 0) {
          setDecks(values);
          setDeckValueSelected(values[0].value);
          loadDataChart(values[0].value);
        }
      })
      .catch((err) => {});
  }, [loadDataChart]);

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

    fetchData();
  }, [fetchData, token]);

  const hardCount = calculatePercentage(totalAccountant, cardsDifficult);
  const goodCount = calculatePercentage(totalAccountant, cardsGoodCount);
  const easyCount = calculatePercentage(totalAccountant, cardsEasyCount);
  const availableCount = calculatePercentage(totalAccountant, cardsUnanswered);

  const utilization = {
    series: [hardCount, goodCount, easyCount],

    options: {
      labels: [
        `Cartões Difíceis: ${hardCount}%`,
        `Cartões Bons: ${goodCount}%`,
        `Cartões Fáceis: ${easyCount}%`,
      ],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },

      yaxis: {
        labels: {
          show: false,
          formatter(val) {
            return '';
          },
        },
      },
      legend: {
        position: 'left',
      },
    },
  };

  function handleDeckChange(event) {
    console.log(event.target.value);
    setDeckValueSelected(event.target.value);

    if (event.target.value === '') return;

    loadDataChart(event.target.value);
  }

  function setDataChart(deck) {
    setCards(deck.Cards);

    const cardsGoodCount = deck.totalCardsGood();
    const cardsEasyCount = deck.totalCardsEasy();
    const cardsDifficult = deck.totalCardsDifficult();
    const cardsUnanswered = deck.totalCardsReviewMoment();
    const total = deck.totalCards();

    const castNan = (value) => (isNaN(value) ? 0 : value);

    console.log('count total', total);
    console.log('count sem resposta', castNan(cardsUnanswered));
    console.log('count cardsGoodCount', castNan(cardsGoodCount));
    console.log('count cardsEasyCount', castNan(cardsEasyCount));
    console.log('count cardsDifficult', castNan(cardsDifficult));

    setTotalAccountant(total);
    setCardsUnanswered(cardsUnanswered);
    setCardsGoodCount(cardsGoodCount);
    setCardsEasyCount(cardsEasyCount);
    setCardsDifficult(cardsDifficult);
    setData([
      calculatePercentage(total, cardsGoodCount),
      calculatePercentage(total, cardsEasyCount),
      calculatePercentage(total, cardsDifficult),
      // , calculatePercentage(total, cardsUnanswered)
    ]);
  }

  function redenChart() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            noFlex
            titleCard="Baralhos"
            paddingBody="0 3rem 3rem 3rem"
            radius="10"
            justifyContent="center"
          >
            <Spacing width="100%">
              <U.Select
                name="notepad"
                onChange={handleDeckChange}
                onBlur={handleDeckChange}
                value={deckValueSelected}
              >
                {decks.map((deck) => {
                  return <option value={deck.value}>{deck.label}</option>;
                })}
              </U.Select>
              <Spacing mb={1} />

              {deckValueSelected !== '' && (
                <>
                  <S.DashInfo>
                    <Text size={1.4}>Cartões disponíveis:</Text>
                    <Spacing mr={1} mt={2} />
                    <Text size={1.8} component="h1">
                      {cardsUnanswered} de {totalAccountant} ( {availableCount}%
                      )
                    </Text>
                  </S.DashInfo>

                  <ApexCharts
                    options={utilization.options}
                    series={utilization.series}
                    type="donut"
                    height={250}
                  />
                </>
              )}
            </Spacing>
          </Card>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Layout childrenTitle={<U.Title component="h1">Estatíticas</U.Title>}>
        <U.Responsive width="1180px" dsGreater="none" dsLess="block">
          <U.Responsive width="769px" dsGreater="none" dsLess="block">
            <U.Title component="h1">Estatíticas</U.Title>
          </U.Responsive>
        </U.Responsive>

        <Spacing mb={1} />

        {redenChart()}
      </Layout>
    </>
  );
}

export default Statistics;
