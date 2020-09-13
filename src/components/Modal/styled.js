import styled, { keyframes } from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  transition: ease-in 0.5s;
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

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0;
  ${({ size }) => (size ? `width: ${size}rem;` : `width: 70rem;`)}
`;

const appearFromBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const ModalContent = styled.div`
  animation: ${appearFromBottom} 0.5s;
  background: ${(props) =>
    props.theme.backgroundSecondary ? props.theme.backgroundSecondary : `#fff`};
  border-radius: 0.8rem;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  padding: 1rem;
  z-index: 999 !important;
  padding: 15px 5px;
`;

export const ButtonClose = styled.div`
  animation: ${appearFromBottom} 0.5s;
  position: absolute;
  right: 33px;
  top: -2.5rem;
  cursor: pointer;
`;
