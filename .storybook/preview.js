import React from 'react';
import { addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from '../src/lib';

import { withInfo } from '@storybook/addon-info';

import GlobalStorybook from './global';

const withGlobal = (Story) => (
  <>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    <GlobalStorybook />
    <GlobalStyles />
  </>
);
addDecorator(withInfo);
addDecorator(centered);
addDecorator(withGlobal);
