import styled from 'styled-components';
import media from 'styled-media-query';

export const Desc = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid
      ${(props) =>
        props.theme.tableBorder ? props.theme.tableBorder : `#f0f0f0`};
  }

  ${media.lessThan('large')`
    flex-direction: column!important;
    align-items: flex-start!important;
    padding: 2rem!important;
    border-radius: 0.8rem;
     background: ${(props) =>
       props.theme.tableDescMobileBackground
         ? props.theme.tableDescMobileBackground
         : `#fff`};
    box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
    margin: 2rem 0;

    &:not(:last-child) {
      margin: 2rem 0 0 0;
      border: none;
    }
  `}
`;
