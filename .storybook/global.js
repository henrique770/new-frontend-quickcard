import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

import Rubik from '../src/lib/assets/fonts/Rubik/Rubik-Regular.ttf';
import Roboto from '../src/lib/assets/fonts/Roboto/Roboto-Regular.ttf';

export default createGlobalStyle`

@font-face {
  font-family: 'Rubik';
  src: url(${Rubik});
}

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto});
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
    outline: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Rubik, sans-serif;
  font-size: 3rem;
  line-height: 1.3;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

  ${media.lessThan('56.25em')`
    font-size: 56.25%;
  `}
}

body {
  font-family: Roboto, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  color: #414D55;
}

table {
  width: 100%!important;
  text-align: left!important;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgb(238, 238, 238);
}

.css-1fhpnuv {
  margin: 0.5rem 0 2rem 0;
}

.container {
  max-width: 200rem;
  padding: 0 10rem;
  width: 100%;

  ${media.lessThan('1700px')`
    padding: 0 10rem!important;
  `}

  ${media.lessThan('1380px')`
    padding: 0 2.5rem!important;
  `}

 ${media.lessThan('medium')`
    padding: 0 .1rem!important;
  `}
}

.boxgrid {
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  color: #111;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
}
`;
