import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Card({
  titleCard,
  noFlex,
  paddingBody,
  justifyContent,
  alignItems,
  radius,
  shadow,
  children,
  ...props
}) {
  return (
    <>
      <S.Card
        titleCard={titleCard}
        noFlex={noFlex}
        radius={radius}
        shadow={shadow}
        {...props}
      >
        {titleCard && <S.TitleCard>{titleCard}</S.TitleCard>}

        <S.BodyCard
          alignItems={alignItems}
          noFlex={noFlex}
          paddingBody={paddingBody}
          justifyContent={justifyContent}
        >
          {children}
        </S.BodyCard>
      </S.Card>
    </>
  );
}

Card.propTypes = {
  /**
   * title of card
   */
  titleCard: PropTypes.string,
  /**
   * display flex disabled
   */
  noFlex: PropTypes.bool,
  /**
   * justify content (flex-start, center, flex-end...)
   */
  justifyContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * custom padding
   */
  paddingBody: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * align items (flex-start, center, flex-end ..)
   */
  alignItems: PropTypes.string,
  /**
   * border radius (custom, px)
   */
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * box shadow (custom)
   */
  shadow: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};
