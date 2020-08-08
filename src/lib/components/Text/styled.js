import styled from 'styled-components';

const getFontSize = (size) => {
  if (!size) return 'font-size: 1.6rem';

  let fontSize;

  switch (size) {
    case 'smallest':
      fontSize = 'font-size: 1rem;';
      break;

    case 'small':
      fontSize = 'font-size: 1.4rem;';
      break;

    case 'normal':
      fontSize = 'font-size: 1.6rem;';
      break;

    case 'medium':
      fontSize = 'font-size: 1.8rem;';
      break;

    default:
      fontSize = `font-size: ${size}rem;`;
      break;
  }

  return {
    fontSize,
  };
};

const getLetterSpacing = (letter) => {
  if (!letter) return '';

  let css;

  switch (letter) {
    case 'small':
      css = 'letter-spacing: 0.1em;';
      break;

    case 'medium':
      css = 'letter-spacing: 0.2em;';
      break;

    case 'big':
      css = 'letter-spacing: 0.3em;';
      break;

    default:
      css = `letter-spacing: ${letter}em;`;
      break;
  }

  return css;
};

export const Text = styled.p`
  ${({ size }) => getFontSize(size).fontSize}
  ${({ letter }) => getLetterSpacing(letter)}
  ${({ upper }) => (upper ? 'text-transform: uppercase;' : '')}
  ${({ weight }) => (weight ? `font-weight: ${weight};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
`;
