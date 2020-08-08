import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function TitleItem({
  title,
  featuredTitle,
  sizeField,
  children,
  ...props
}) {
  return (
    <S.TitleItem
      title={title}
      featuredTitle={featuredTitle}
      sizeField={sizeField}
      {...props}
    >
      {title}
      {children}
    </S.TitleItem>
  );
}

TitleItem.propTypes = {
  /**
   * The featured title of table, propertie to responsive title.
   */
  featuredTitle: PropTypes.bool,
  /**
   * The title of item.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * size of field (flex basis) %.
   */
  sizeField: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * children element
   */
  children: PropTypes.node,
};
