import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  margin-right: 2rem;
  cursor: pointer;
  &[type='checkbox'] {
    position: relative;
    border-radius: 0.4rem;
  }
  &[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -0.3rem;
    left: 0;
    border-radius: 0.4rem;
    background-color: ${(props) =>
      props.theme.checkBoxBackground
        ? props.theme.checkBoxBackground
        : `#E4EAF0`};
  }
  &[type='checkbox']:checked:before {
    content: '';
    display: block;
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -0.3rem;
    left: 0;
    border-radius: 0.4rem;
    ${({ colorCheckbox }) =>
      colorCheckbox
        ? `background-color: ${colorCheckbox};`
        : `background-color: #2662f0;`}
  }

  ${({ disabled }) =>
    disabled ? `  background-color: #ddd;  cursor: not-allowed!important;` : ``}
`;

export const TextLabel = styled.p`
  font-size: 1.6rem;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
`;
