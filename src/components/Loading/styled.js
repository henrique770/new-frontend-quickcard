import styled, { keyframes } from 'styled-components';

const spin = keyframes`
to { transform: rotate(360deg);} `;

export const Loading = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-left-color: #fff;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: ${spin} 1s linear infinite;
`;
