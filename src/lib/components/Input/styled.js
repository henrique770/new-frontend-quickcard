import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  padding-left: 2rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.4rem;
  font-family: inherit;
  background-color: ${(props) =>
    props.theme.InputBackground ? props.theme.InputBackground : `#FAFBFD`};

  color: ${(props) =>
    props.theme.textColorPrimary ? props.theme.textColorPrimary : `#90A1AC`};

  &[type=checkbox] {
    width: auto;
  }

  ::-webkit-input-placeholder {
    color: ${(props) =>
      props.theme.Inputplaceholder ? props.theme.Inputplaceholder : `#90A1AC`};
  }

  :-ms-input-placeholder {
    color: ${(props) =>
      props.theme.Inputplaceholder ? props.theme.Inputplaceholder : `#90A1AC`};
  }

  ::placeholder {
    color: ${(props) =>
      props.theme.Inputplaceholder ? props.theme.Inputplaceholder : `#90A1AC`};
  }

  ${({ disabled }) =>
    disabled
      ? `
      background-color: #fff;
      cursor: not-allowed;`
      : ``}

  ${({ padding }) =>
    padding ? `padding: ${padding};` : `padding: 1rem 1.6rem 1rem 1.6rem;`}
  ${({ shadow }) => (shadow ? `box-shadow: ${shadow};` : ``)}
  ${({ border }) => (border ? `border: ${border};` : `border: none;`)}
  ${({ radius }) => (radius ? `border-radius: ${radius};` : ``)}
`;

export const Label = styled.p`
  padding: 0 0 0.5rem 0.5rem;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`;
