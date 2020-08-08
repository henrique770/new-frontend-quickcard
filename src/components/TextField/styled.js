import styled from 'styled-components';
import { TextField } from '~/lib';

export const Input = styled(TextField)`
  * {
    color: ${(props) => props.theme.textColorPrimary}!important;
  }
  width: 100% !important;

  select {
    option {
      background-color: ${(props) =>
        props.theme.selectProfileBackground}!important;
    }
  }
`;
