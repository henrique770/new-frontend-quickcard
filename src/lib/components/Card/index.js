import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Card({
  titleCard,
  textFooter,
  noFlex,
  paddingBody,
  justifyContent,
  textCenter,
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
          textCenter={textCenter}
          paddingBody={textFooter ? '0 3rem 1rem 3rem' : paddingBody}
          justifyContent={justifyContent}
        >
          {children}
        </S.BodyCard>

        {textFooter && <S.TextFooter>{textFooter}</S.TextFooter>}
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
   * text on footer of card
   */
  textFooter: PropTypes.string,
  /**
   * display flex disabled
   */
  noFlex: PropTypes.bool,
  /**
   * text align center
   */
  textCenter: PropTypes.bool,
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
