import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Button({
  radius,
  shadow,
  padding,
  disabled,
  display,
  bgColor,
  Bghover,
  outlineColor,
  children,
  ...props
}) {
  return (
    <S.Button
      radius={radius}
      shadow={shadow}
      padding={padding}
      disabled={disabled}
      display={display}
      bgColor={bgColor}
      Bghover={Bghover}
      outlineColor={outlineColor}
      {...props}
    >
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  /**
   * border radius (custom, px)
   */
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * custom shadow
   */
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The button padding
   */
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * button disabled
   */
  disabled: PropTypes.bool,
  /**
   * display (custom)
   */
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * The button color
   */
  bgColor: PropTypes.string,
  /**
   * The background hover
   */
  Bghover: PropTypes.string,
  /**
   * The outline color button
   */
  outlineColor: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  padding: '1rem 3.3rem 1rem 3.3rem',
  shadow: false,
  disabled: false,
  display: 'inline-block',
};
