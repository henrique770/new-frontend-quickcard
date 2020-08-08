import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconSelect = styled.div`
  position: absolute;

  right: 1.5rem;
`;
export const ImageProfile = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  width: 3.9rem;
  height: 3.9rem;
  border-radius: 8px;
  object-fit: cover;
`;

export const SelectProfile = styled.select`
  -webkit-appearance: none;
  background-repeat: no-repeat;
  background-position: center right 1rem;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 2rem 1rem 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-family: inherit;
  border: none;
  background-color: ${(props) =>
    props.theme.selectProfileBackground
      ? props.theme.selectProfileBackground
      : `#dae5ed78`};
  border-radius: 8px;

  option {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const DefaultSelect = styled.select`
  -webkit-appearance: none;
  background-repeat: no-repeat;
  background-position: center right 1rem;
  color: #fff;
  color: ${(props) =>
    props.theme.textColorSecondary
      ? props.theme.textColorSecondary
      : `#414D55`};
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  border: none;
  background-color: ${(props) =>
    props.theme.selectBackground ? props.theme.selectBackground : `#edeff569`};
  border-radius: 8px;
`;
