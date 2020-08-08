import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Spacing({ mt, mr, mb, ml, ds, width, ...props }) {
  return (
    <S.Spacing
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      ds={ds}
      width={width}
      {...props}
    />
  );
}

Spacing.propTypes = {
  /**
   * Margin top. (rem)
   */
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Margin right. (rem)
   */
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Margin bottom. (rem)
   */
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Margin left. (rem)
   */
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Display (a display option).
   */
  ds: PropTypes.string,
  /**
   * Width.
   */
  width: PropTypes.string,
};

Spacing.defaultProps = {
  ds: 'block',
};
