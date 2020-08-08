import styled from 'styled-components';
import media from 'styled-media-query';

export const Data = styled.td`
  padding: 1.6rem 7rem;
  width: 50%;

  &:first-child {
    border-right: 1px solid
      ${(props) =>
        props.theme.tableBorder ? props.theme.tableBorder : `#f0f0f0`};
    text-align: right;
    padding-right: 7rem;
  }

  ${media.lessThan('medium')`
    padding: 1.6rem 2rem;

    &:first-child {
      padding-right: 3rem;
    }
  `}
`;

export const TextData = styled.p`
  font-size: 1.6rem;
  ${({ bold }) => bold && `font-weight: bold;`}
`;
