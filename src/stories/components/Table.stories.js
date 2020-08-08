import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Grid,
  Table,
  Image,
  Spacing,
  Text,
  Button,
  GetSizeScreen,
} from '../../lib';

storiesOf('Components | Table', module).add(
  'Table example',
  () => {
    const { width } = GetSizeScreen();
    return (
      <>
        <div style={{ margin: '10rem' }}>
          <Grid container xs={12} justify="center">
            <Grid item xs={12} md={10}>
              <Table.Container>
                <Table.Title>
                  <Table.TitleItem featuredTitle sizeField="25">
                    Title
                  </Table.TitleItem>
                  <Table.TitleItem sizeField="13" title="Title" />
                  <Table.TitleItem sizeField="13" title="Title" />
                  <Table.TitleItem sizeField="13" title="Title" />
                  <Table.TitleItem sizeField="13">Title</Table.TitleItem>
                </Table.Title>

                <Table.Desc>
                  <Table.BoxDesc>
                    <Image width="5.5" height="5.5" cover radius="50%">
                      <img
                        src="https://www.revide.com.br/media/upload/noticias/2019/09/13/14/10/destaque-zumba.jpeg"
                        alt="teste"
                      />
                    </Image>
                    <Spacing ml="2">
                      <Text size="normal">Alessandra Santos</Text>

                      <ul>
                        <li>
                          <Image width="1.4" height="1.4">
                            <img
                              src="https://logodownload.org/wp-content/uploads/2017/05/skype-logo-1.png"
                              alt="teste"
                            />
                          </Image>
                        </li>
                        <li>
                          <Image width="1.4" height="1.4">
                            <img
                              src="https://lh3.googleusercontent.com/5puZavg4x2pThSTJgos1sARWoARea7tzr_B8AWEwn2lV05RoXo9M8BM2XwcvwG6nIGc"
                              alt="teste"
                            />
                          </Image>
                        </li>
                      </ul>
                    </Spacing>
                  </Table.BoxDesc>
                  <Table.DescItem sizeField="13" descTitle="TitleDesc">
                    <Text color="#7d45a6" size="medium" upper weight="bold">
                      05
                    </Text>
                  </Table.DescItem>
                  <Table.DescItem sizeField="13" descTitle="TitleDesc">
                    <Text color="#52a6f4" size="medium" upper weight="bold">
                      02
                    </Text>
                  </Table.DescItem>
                  <Table.DescItem sizeField="13" descTitle="TitleDesc">
                    <Text color="#f82323" size="medium" upper weight="bold">
                      03
                    </Text>
                  </Table.DescItem>
                  <Table.DescItem sizeField="13" descTitle="TitleDesc">
                    <Text color="#3ce457" size="medium" upper weight="bold">
                      08
                    </Text>
                  </Table.DescItem>
                  <Spacing mt="2" width={width < 1170 ? `100%` : ``}>
                    <Grid container justify="center">
                      <Button radius="20px">
                        <Text component="h1">See details</Text>
                      </Button>
                    </Grid>
                  </Spacing>
                </Table.Desc>
              </Table.Container>
            </Grid>
          </Grid>
        </div>
      </>
    );
  },
  {
    centered: { disable: true },
    info: {
      inline: true,
      source: false,
      propTables: [
        Table.Container,
        Table.BoxDesc,
        Table.Desc,
        Table.DescItem,
        Table.Title,
        Table.TitleItem,
      ],
      text: `

  ex:\n

  example table component use:\n

  ~~~js
    <Table.Container>
    <Table.Title>
      <Table.TitleItem featuredTitle sizeField="25">
        Title
      </Table.TitleItem>
      <Table.TitleItem sizeField="13" title="Title" />
      <Table.TitleItem sizeField="13" title="Title" />
      <Table.TitleItem sizeField="13" title="Title" />
      <Table.TitleItem sizeField="13">Title</Table.TitleItem>
    </Table.Title>

    <Table.Desc>
      <Table.BoxDesc>
        <Image width="5.5" height="5.5" cover radius="50%">
          <img
            src="https://www.revide.com.br/media/upload/noticias/2019/09/13/14/10/destaque-zumba.jpeg"
            alt="teste"
          />
        </Image>
        <Spacing ml="2">
          <Text size="normal">Alessandra Santos</Text>

          <ul>
            <li>
              <Image width="1.4" height="1.4">
                <img
                  src="https://logodownload.org/wp-content/uploads/2017/05/skype-logo-1.png"
                  alt="teste"
                />
              </Image>
            </li>
            <li>
              <Image width="1.4" height="1.4">
                <img
                  src="https://lh3.googleusercontent.com/5puZavg4x2pThSTJgos1sARWoARea7tzr_B8AWEwn2lV05RoXo9M8BM2XwcvwG6nIGc"
                  alt="teste"
                />
              </Image>
            </li>
          </ul>
        </Spacing>
      </Table.BoxDesc>
      <Table.DescItem sizeField="13" descTitle="TitleDesc">
        <Text color="#7d45a6" size="medium" upper weight="bold">
          05
        </Text>
      </Table.DescItem>
      <Table.DescItem sizeField="13" descTitle="TitleDesc">
        <Text color="#52a6f4" size="medium" upper weight="bold">
          02
        </Text>
      </Table.DescItem>
      <Table.DescItem sizeField="13" descTitle="TitleDesc">
        <Text color="#f82323" size="medium" upper weight="bold">
          03
        </Text>
      </Table.DescItem>
      <Table.DescItem sizeField="13" descTitle="TitleDesc">
        <Text color="#3ce457" size="medium" upper weight="bold">
          08
        </Text>
      </Table.DescItem>
      <Spacing mt="2" />
      <Button radius="20px">
        <Text component="h1">See Details</Text>
      </Button>
    </Table.Desc>
  </Table.Container>
  ~~~


`,
    },
  }
);
