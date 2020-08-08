import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Select({
  options = [],
  label,
  onChange,
  icon,
  image,
  profile,
  labelSelected,
  ...props
}) {
  return (
    <S.Container>
      <S.IconSelect>{icon}</S.IconSelect>
      {profile ? (
        <>
          <S.ImageProfile src={image} alt="image" />
          <S.SelectProfile
            id={label}
            onChange={onChange}
            icon={icon}
            {...props}
          >
            {labelSelected && (
              <option value={labelSelected} selected disabled>
                {labelSelected}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.id} value={opt.value}>
                {opt.name}
              </option>
            ))}
          </S.SelectProfile>
        </>
      ) : (
        <S.DefaultSelect id={label} onChange={onChange} icon={icon} {...props}>
          {labelSelected && (
            <option value={labelSelected} selected disabled>
              {labelSelected}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.id} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </S.DefaultSelect>
      )}
    </S.Container>
  );
}

Select.propTypes = {
  /**
   * The data options.
   */
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * The type of select.
   */
  profile: PropTypes.bool,
  /**
   * The image of profile select.
   */
  image: PropTypes.string,
  /**
   * The label of input.
   */
  label: PropTypes.string,
  /**
   * The label selected of input.
   */
  labelSelected: PropTypes.string,
  /**
   * The change handler that will receive the updated value as it's only param.
   */
  onChange: PropTypes.func,
  /**
   * The icon that will apper in the right side (arrow down) ex: can be a svg icon.
   */
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Select.defaultProps = {
  icon: true,
  profile: false,
};
