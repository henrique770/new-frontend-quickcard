import styled from 'styled-components';
import media from 'styled-media-query';

export const BoxDesc = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ sizeField }) => (sizeField ? `0 0 ${sizeField}%` : `0 0 25%`)};

  ${media.lessThan('large')`
    margin: 0 2rem 2rem 0;
  `}

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    margin-right: 0;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;
