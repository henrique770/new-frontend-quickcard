import React, { useContext, useState, useRef } from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined';

import history from '~/services/history';
import { Grid, Spacing, Text, Card, useOutsideClick } from '~/lib';

import Layout from '~/components/Layout';
import Modal from '~/components/Modal';
import TextField from '~/components/TextField';

import * as U from '~/styles/utilities';

function FlashCard() {
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
      <Layout noHeader>
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
                <ArrowBack size={20} color={themeContext.textColorSecondary} />
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
          <Grid item xs={12} sm={4}>
            <U.Title component="h1">Resolução do cartão</U.Title>
          </Grid>
          <Grid item xs={12} sm={4} style={{ textAlign: 'end' }}>
            <U.ButtonResponsive
              bgColor="#fe650e"
              radius="4px"
              onClick={() => setModalOpen(true)}
            >
              <Text size={1.4}>Editar cartão</Text>
            </U.ButtonResponsive>
          </Grid>
        </Grid>

        <Spacing mb={2.2} />
        <Text>Teste</Text>
        <Grid />
      </Layout>

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
                <Text size={1.4}>Salvar</Text>
              </U.ButtonResponsive>
            </Grid>
          </U.FormCard>
        </Modal>
      )}
    </>
  );
}

export default FlashCard;
