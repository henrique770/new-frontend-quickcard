import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Container({
  open,
  importantImage,
  importantText,
  logo,
  linkLogo,
  children,
  ...props
}) {
  return (
    <S.Menu
      importantImage={importantImage}
      importantText={importantText}
      linkLogo={linkLogo}
      open={open}
      {...props}
    >
      <S.MainAlign>
        {logo && (
          <Link to={linkLogo}>
            <S.Logo src={logo} alt="logo" />
          </Link>
        )}
        {importantImage && (
          <S.SessionImportantContainer>
            <S.ImportantImage src={importantImage} alt={importantText} />
            <S.AlignInfo>
              <S.TextCard>{importantText} </S.TextCard>
            </S.AlignInfo>
          </S.SessionImportantContainer>
        )}
      </S.MainAlign>
      <S.ItemsContainer>
        <S.AlignItems>{children}</S.AlignItems>
      </S.ItemsContainer>
    </S.Menu>
  );
}

Container.propTypes = {
  /**
   * receive a boolean value to activate the sidebar.
   */
  open: PropTypes.bool,
  /**
   * receive a logo image.
   */
  logo: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * receive a logo link.
   */
  linkLogo: PropTypes.string,
  /**
   * receive a image.
   */
  importantImage: PropTypes.string,
  /**
   * receive a text.
   */
  importantText: PropTypes.string,
  /**
   * children element
   */
  children: PropTypes.node,
};

Container.defaultProps = {
  open: false,
};
