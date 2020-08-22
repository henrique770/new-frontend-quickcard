import styled from 'styled-components';
import media from 'styled-media-query';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 999;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  padding-top: 5rem;
  padding: 2rem;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${media.greaterThan('medium')`
    margin-top: 20rem;
    ${({ size }) => (size ? `width: ${size}rem;` : `width: 70rem;`)}
  `}
`;

export const ModalContent = styled.div`
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.8rem;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  padding: 1rem;
  z-index: 999 !important;
  padding: 15px 5px;
`;

export const ButtonClose = styled.div`
  position: absolute;
  right: 33px;
  top: -2.5rem;
  cursor: pointer;
`;
