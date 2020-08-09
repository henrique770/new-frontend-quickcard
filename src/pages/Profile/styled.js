import styled from 'styled-components';
import ImageBorder from '~/components/ImageBorder';

export const ImageMenu = styled(Image)`
  cursor: pointer;
  img {
    width: 8rem;
    height: 8rem;

    @media (min-width: 1480px) {
      width: 13rem;
      height: 13rem;
    }
  }
`;

export const ImageContainer = styled(ImageBorder)`
  cursor: pointer;
  position: relative;

  &:hover {
    img {
      opacity: 37%;
    }
  }
`;

export const IconChangeImage = styled.div`
  transition: 0.5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  svg {
    width: 8rem;
  }
`;
