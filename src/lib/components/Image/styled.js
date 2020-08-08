import styled from 'styled-components';

export const Image = styled.div`
  img,
  svg {
    ${({ width }) => (width ? `width: ${width}rem;` : ``)}
    ${({ height }) => (height ? `height: ${height}rem;` : ``)}
    ${({ cover }) => (cover ? `object-fit: cover;` : ``)}
    ${({ contain }) => (contain ? `object-fit: contain;` : ``)}
    ${({ radius }) => (radius ? `border-radius: ${radius};` : ``)}
  }
`;
