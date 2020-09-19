import styled from 'styled-components';
import media from 'styled-media-query';

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

export const Title = styled.h1`
  font-size: 7rem;
  ${media.lessThan('340px')`
  font-size: 5rem;
  margin-top: 15rem;
  `}
`;

export const MessageContainer = styled.div`
  z-index: 1;
  margin-left: -5.5rem;

  ${media.lessThan('500px')`
    margin-top: -15rem;
    margin-left: 0;
  `}

  ${(props) => props.theme.mode === 'dark' && 'text-shadow: 0 1px 12px #111;'}
`;

export const ImageContainer = styled.div`
  img {
    max-width: 56rem;
    margin-top: -16rem;

    ${media.lessThan('500px')`
    max-width: 30rem;
    `}
  }
`;
