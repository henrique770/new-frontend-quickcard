import styled from 'styled-components';
import { darken } from 'polished';

export const SearchContainer = styled.div`
  position: relative;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: none;
  width: 3rem;
  border-radius: 0.4rem;
  margin-right: 3rem;
  cursor: pointer;
  right: -24px;
  top: 3px;
  background: #ff9a00;

  &:hover {
    background: ${darken(0.1, '#ff9a00')};
  }
`;

export const ButtonReset = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: none;
  width: 3rem;
  border-radius: 0.4rem;
  margin-right: 3rem;
  cursor: pointer;
  right: 12px;
  top: 3px;
  background: #363636;
  opacity: 37%;

  &:hover {
    background: ${darken(0.1, '#363636')};
  }
`;
