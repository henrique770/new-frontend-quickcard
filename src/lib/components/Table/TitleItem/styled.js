import styled from 'styled-components';
import media from 'styled-media-query';

export const TitleItem = styled.div`
  flex-direction: column;
  color: ${(props) =>
    props.theme.textColorPrimary ? props.theme.textColorPrimary : `#414D55`};
  font-size: 1.6rem;
  letter-spacing: 0.1em;
  font-weight: 600;

  ${media.lessThan('large')`
    margin-right: 2rem;
  `}

  ${media.lessThan('large')`
    display: none;
  `}

  ${media.lessThan('large')`
   ${({ featuredTitle }) => (featuredTitle ? `display: block!important;` : ``)}
  `}

  ${({ sizeField }) => (sizeField ? `flex: 0 0 ${sizeField}%` : ``)}
`;
