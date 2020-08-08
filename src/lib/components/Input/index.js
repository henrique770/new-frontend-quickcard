import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Input({
  InputLabel,
  name,
  value,
  onChange,
  disable,
  padding,
  shadow,
  border,
  radius,
  icon,
  ...props
}) {
  return (
    <>
      {InputLabel && (
        <S.Label size="1.4" letter="small">
          {InputLabel}
        </S.Label>
      )}
      <S.Container>
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          id={InputLabel}
          name={name}
          value={value}
          onChange={onChange}
          disable={disable}
          padding={padding}
          shadow={shadow}
          border={border}
          radius={radius}
          {...props}
        />
      </S.Container>
    </>
  );
}

Input.propTypes = {
  /**
   * The id of the field.
   */
  id: PropTypes.string,
  /**
   * The label of the field.
   */
  InputLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * The name of the field.
   */
  name: PropTypes.string,
  /**
   * The current value.
   */
  value: PropTypes.string,
  /**
   * The change handler that will receive the updated value as it's only param.
   */
  onChange: PropTypes.func,
  /**
   * The disabled filed.
   */
  disable: PropTypes.bool,
  /**
   * padding.
   */
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * input boxshadow.
   */
  shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The input border, receive a custom value.
   */
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The radius input, custom (px).
   */
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The icon input
   */
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Input.defaultProps = {
  onChange: () => {},
  disable: false,
  padding: false,
  border: 'none',
  icon: false,
};
