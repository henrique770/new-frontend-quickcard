import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Input({
  name,
  value,
  colorCheckbox,
  disabled,
  textLabel,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <S.Container>
        <S.CheckBox
          onClick={() => setIsChecked(!isChecked)}
          type="checkbox"
          name={name}
          value={value}
          onChange={(event) => setIsChecked(event.currentTarget.checked)}
          checked={isChecked}
          colorCheckbox={colorCheckbox}
          disabled={disabled}
          {...props}
        />

        <S.TextLabel onClick={!disabled ? () => setIsChecked(!isChecked) : ``}>
          {textLabel}
        </S.TextLabel>
      </S.Container>
    </>
  );
}

Input.propTypes = {
  /**
   * The name of the field.
   */
  name: PropTypes.string,
  /**
   * The current value.
   */
  value: PropTypes.string,

  /**
   * The disabled field.
   */
  disabled: PropTypes.bool,
  /**
   * Text label.
   */
  textLabel: PropTypes.string,
  /**
   * The color of the checkbox.
   */
  colorCheckbox: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
};
