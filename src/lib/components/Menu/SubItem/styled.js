import styled from 'styled-components';

export const SubMenu = styled.ul`
  display: flex;
  z-index: 1;
  list-style: none;
  display: none;
  position: relative;
  width: 80%;
  left: 4rem;
  top: 0;
  background-color: transparent;
  box-shadow: none;
`;

export const SubItem = styled.li`
  margin-top: 2rem;
  a {
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
