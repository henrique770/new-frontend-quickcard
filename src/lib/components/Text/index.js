import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Text({
  component,
  size,
  letter,
  upper,
  weight,
  color,
  children,
  ...props
}) {
  const TextComponent = component ? S.Text.withComponent(component) : S.Text;

  return (
    <TextComponent
      size={size}
      letter={letter}
      upper={upper}
      weight={weight}
      color={color}
      {...props}
    >
      {children}
    </TextComponent>
  );
}

Text.propTypes = {
  /**
   * variations: h1, h2, h3, h4, h5, h6, p, span.
   */
  component: PropTypes.string,
  /**
   * The font size
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The font letter spacing
   */
  letter: PropTypes.string,
  /**
   * uppercase font
   */
  upper: PropTypes.bool,
  /**
   * The font weight
   */
  weight: PropTypes.string,
  /**
   * The font color
   */
  color: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};

Text.defaultProps = {
  size: 'normal',
  upper: false,
};
