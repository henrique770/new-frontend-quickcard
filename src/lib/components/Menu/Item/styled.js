import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuItem = styled.div`
  position: relative !important;
  display: flex;
  align-items: center !important;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
  margin-bottom: 4rem;

  ${media.lessThan('medium')`
    width: 100%;
    margin-right: 0 !important;
    color: ${(props) =>
      props.theme.textColorSecondary
        ? props.theme.textColorSecondary
        : `#414D55`};


  `}
  & > a {
    display: flex;
    flex-direction: row;
  }

  &:hover > ul {
    display: block;
  }

  a {
    color: ${(props) =>
      props.theme.textColorSecondary
        ? props.theme.textColorSecondary
        : `#414D55`};
  }
  a:hover {
    transition: 0.5s;
    color: #fe650e;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none !important;
  }

  a:before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    left: -1.7rem;
    top: 0;
    border-radius: 50%;
    ${({ active }) => (active ? `background: #007AFF;` : ``)}
  }
`;

export const Icon = styled.div`
  margin-right: 2rem;
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const AlignMenuItem = styled.div`
  ${media.lessThan('768px')`
  display: flex;
  align-items: flex-start;
  `}
`;

export const AlignChildren = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  cursor: pointer;
`;
