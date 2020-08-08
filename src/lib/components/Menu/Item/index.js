import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Item({
  active,
  submenu,
  title,
  link,
  icon,
  children,
  ...props
}) {
  return (
    <S.MenuItem active={active} {...props}>
      {icon && <S.Icon>{icon}</S.Icon>}
      {link ? (
        <Link to={link}>
          <S.Text>{title}</S.Text>
        </Link>
      ) : (
        <S.Text>{title}</S.Text>
      )}
      {children}
    </S.MenuItem>
  );
}

Item.propTypes = {
  /**
   * Active color on menu Item.
   */
  active: PropTypes.bool,
  /**
   * icon.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * title of menu item.
   */
  title: PropTypes.string,
  /**
   * link of menu item.
   */
  link: PropTypes.string,
  /**
   * property to submenu item.
   */
  submenu: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * children element
   */
  children: PropTypes.node,
};

Item.defaultProps = {
  active: false,
};
