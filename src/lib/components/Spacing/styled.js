import styled from 'styled-components';

export const Spacing = styled.div`
  ${({ mt }) => (mt ? `margin-top: ${mt}rem;` : ``)}
  ${({ mr }) => (mr ? `margin-right: ${mr}rem;` : ``)}
  ${({ mb }) =>
    mb ? `margin-bottom: ${mb}rem;` : ``}
  ${({ ml }) =>
    ml ? `margin-left: ${ml}rem;` : ``}
  ${({ ds }) =>
    ds ? `display: ${ds};` : ``}
  ${({ width }) =>
    width ? `width: ${width};` : ``}

    @media(max-width: ${({ breakpoint }) =>
    breakpoint && `${breakpoint}`}) {
    ${({ responsiveM }) => responsiveM && `margin: ${responsiveM}`}
  }
`;
