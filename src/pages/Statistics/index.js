import React from 'react';

import { SearchOutline } from '@styled-icons/evaicons-outline';

import ApexCharts from 'react-apexcharts';
import { Grid, Input, Spacing, Text, Card } from '~/lib';

import Layout from '~/components/Layout';

import * as U from '~/styles/utilities';
import * as S from './styled';

function Statistics() {
  const weekDayShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const alunos = {
    series: [
      {
        name: 'porcentagem anterior',
        data: [44, 55, 41, 67, 22, 43, 50],
      },
      {
        name: 'aumento',
        data: [13, 23, 20, 20, 13, 27, 50],
      },
    ],
    options: {
      colors: ['#FF9800', '#66DA26'],
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',

          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },

      xaxis: {
        categories: weekDayShort,
        position: 'bottom',
        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },

      yaxis: {
        title: {
          text: 'Porcentagem',
        },

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter(val) {
            return `${val}%`;
          },
        },
      },
      title: {
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    },
  };
  return (
    <>
      <Layout childrenTitle={<U.Title component="h1">Estatíticas</U.Title>}>
        <U.Responsive width="1180px" dsGreater="none" dsLess="block">
          <U.Responsive width="769px" dsGreater="none" dsLess="block">
            <U.Title component="h1">Estatíticas</U.Title>
          </U.Responsive>

          <Spacing mt={2} mb={2.2}>
            <Grid item xs={12}>
              <Input
                icon={<SearchOutline size={17} color="#636D73" />}
                type="email"
                padding="1rem 1.6rem 1rem 4.6rem"
                radius="8px"
                placeholder="Pesquisar baralho"
              />
            </Grid>
          </Spacing>
        </U.Responsive>
        <Spacing mb={1} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              noFlex
              titleCard="Acertos/ Erros"
              paddingBody="0 3rem 3rem 3rem"
              radius="10"
              justifyContent="center"
            >
              <Spacing width="100%">
                <S.DashInfo>
                  <Text size={2.2} component="h1">
                    12370
                  </Text>
                  <Spacing mr={1} />
                  <Text size={1.4}>quantidade de cartões</Text>
                </S.DashInfo>
                <ApexCharts
                  options={alunos.options}
                  series={alunos.series}
                  type="bar"
                  height={222}
                />
              </Spacing>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Statistics;
