import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Image({
  width,
  height,
  cover,
  contain,
  radius,
  children,
  ...props
}) {
  return (
    <S.Image
      width={width}
      height={height}
      cover={cover}
      contain={contain}
      radius={radius}
      {...props}
    >
      {children}
    </S.Image>
  );
}

Image.propTypes = {
  /**
   * The width of image (rem)
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The height of image (rem)
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Object fit cover
   */
  cover: PropTypes.bool,
  /**
   * Object fit contain
   */
  contain: PropTypes.bool,
  /**
   * Custom border radius
   */
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * children element
   */
  children: PropTypes.node,
};

Image.defaultProps = {
  cover: false,
  contain: false,
};
