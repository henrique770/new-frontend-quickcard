import styled from 'styled-components';
import media from 'styled-media-query';

export const DescItem = styled.div`
  ${media.lessThan('large')`
   margin-right: 2rem;
  `}

  ${media.lessThan('large')`
    width: 100%!important;
    display: flex!important;
    align-items: start!important;
    justify-content: space-between!important;
    &:not(:last-child) {
    border-bottom: 1px solid
      ${(props) =>
        props.theme.tableBorder ? props.theme.tableBorder : `#f0f0f0`};
    }
  `}

  ${({ sizeField }) => (sizeField ? `flex: 0 0 ${sizeField}%` : ``)}
`;

export const DescTitle = styled.div`
  color: ${(props) =>
    props.theme.tableTextColor ? props.theme.tableTextColor : `#636D73`};
  display: none;
  font-size: 1.4rem;
  font-weight: bold;

  ${media.lessThan('large')`
    display: block;
    margin-right: 2rem;
  `}
`;
