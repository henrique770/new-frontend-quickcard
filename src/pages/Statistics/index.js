import React from 'react';

import { SearchOutline } from '@styled-icons/evaicons-outline';

import ApexCharts from 'react-apexcharts';
import { Grid, Input, Spacing, Text, Card } from '~/lib';

import Layout from '~/components/Layout';

import * as U from '~/styles/utilities';
import * as S from './styled';

function Statistics() {
  const utilization = {
    series: [20, 50, 30],

    options: {
      labels: ['Cartões Difíceis', 'Cartões Bons', 'Cartões Fáceis'],
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
            return `${val}%`;
          },
        },
      },
      legend: {
        position: 'bottom',
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
              titleCard="Baralhos"
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
                  <Text size={1.4}>quantidade de cartões respondidos</Text>
                </S.DashInfo>
                <ApexCharts
                  options={utilization.options}
                  series={utilization.series}
                  type="donut"
                  height={300}
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
