import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Subject, Apps } from '@styled-icons/material-outlined';

import { Spacing, Button } from '~/lib';

export default function VariationList({ Gridfunc, Listfunc }) {
  const themeContext = useContext(ThemeContext);
  return (
    <Spacing ds="flex">
      <Button
        padding="0.7rem"
        bgColor={themeContext.backgroundSecondary}
        radius="4px"
        onClick={Gridfunc}
      >
        <Apps size={20} color="#fe650e" />
      </Button>
      <Spacing mr={1} />
      <Button
        padding="0.7rem"
        bgColor={themeContext.backgroundSecondary}
        radius="4px"
        onClick={Listfunc}
      >
        <Subject size={20} color="#fe650e" />
      </Button>
    </Spacing>
  );
}
