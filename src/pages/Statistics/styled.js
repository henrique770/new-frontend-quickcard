import styled from 'styled-components';

export const DashInfo = styled.div`
  background: ${(props) => props.theme.selectBackground};
  color: ${(props) => props.theme.textColorSecondary};
  padding: 1rem 2.2rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ``}
`;
