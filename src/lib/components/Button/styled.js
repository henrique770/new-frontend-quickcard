import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
    text-align: center;
    border: none;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;

  ${({ padding }) =>
    padding ? `padding: ${padding};` : 'padding: 1rem 3.3rem 1rem 3.3rem;'}

  ${({ bgColor }) =>
    bgColor ? `background-color: ${bgColor};` : 'background-color: #2662F0;'}

  &:hover {
    ${({ bgColor }) =>
      bgColor && `background-color: ${darken(0.1, bgColor)}!important;`}

    ${({ Bghover }) =>
      Bghover
        ? `background-color: ${Bghover}!important;`
        : 'background-color: #2652F9'}
  }

  ${({ outlineColor }) =>
    outlineColor
      ? `
  background-color: transparent!important;
  border: 2px solid ${outlineColor} !important;
  background-color: ${outlineColor};
  `
      : ''}

  ${({ disabled }) =>
    disabled && `background: #F1F5F8; !important; cursor: no-drop;`}

  ${({ shadow }) => (shadow ? `box-shadow: ${shadow};` : '')}
  ${({ radius }) => (radius ? `border-radius: ${radius};` : '')}
  ${({ display }) =>
    display ? `display: ${display};` : 'display: inline-block;'}
`;
