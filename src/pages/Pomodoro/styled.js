import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
`;

export const ProgressContainer = styled.div`
  width: 40rem;
  position: relative;

  .CircularProgressbar-path {
    stroke: #3e98c7;
  }
  .CircularProgressbar-trail {
    stroke: gray;
  }
  .CircularProgressbar-text {
    fill: ${(props) => props.theme.textColorSecondary};
    font-size: 25px;
    font-weight: bold;
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;

export const Time = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
