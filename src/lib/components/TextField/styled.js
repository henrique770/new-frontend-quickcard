import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Input = styled(TextField)`
  * {
    color: ${(props) =>
      props.theme.textColorPrimary
        ? props.theme.textColorPrimary
        : `#414D55`}!important;
    font-size: 1.4rem !important;
  }
  width: 100% !important;

  select {
    option {
      background-color: ${(props) =>
        props.theme.selectProfileBackground
          ? props.theme.selectProfileBackground
          : `#dae5ed78`}!important;
    }
  }
`;
