/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  ExitToApp,
  Clear,
} from '@styled-icons/material-outlined';
import Grid from '../Grid';
import useOutsideClick from '../../hooks/useOutsideClick';
import Spacing from '../Spacing';

import GetSizeScreen from '../../hooks/getSizeScreen';

import * as S from './styled';

export default function Header({
  open,
  icon,
  iconNotification,
  notificationActive,
  setOpen,
  name,
  image,

  childrenTitle,
  dropDownOptions = [],
  childrenNotification,
  children,
  logoutFunc,
  ...props
}) {
  const { width } = GetSizeScreen();

  const [isShow, setIsShow] = useState(false);

  const node = useRef();

  useOutsideClick(node, () => {
    if (isShow) setIsShow(false);
  });

  function showDropdown() {
    setIsShow(!isShow);
  }

  const [showNotifications, setShowNotifications] = useState(false);

  const nodeNotification = useRef();
  const nodeNotificationModal = useRef();

  useOutsideClick(nodeNotification, () => {
    if (showNotifications) setShowNotifications(false);
  });

  useOutsideClick(nodeNotificationModal, () => {
    if (showNotifications) setShowNotifications(false);
  });

  function showNotificationBox() {
    setShowNotifications(!showNotifications);
  }

  return (
    <S.Header {...props}>
      <S.AlignmentHeader>
        <Grid md={6}>
          <S.IconMenuMobile open={open} onClick={() => setOpen(!open)}>
            {icon}
          </S.IconMenuMobile>
          <S.Title>{width > 768 && <>{childrenTitle}</>}</S.Title>
        </Grid>
        <Grid md={6}>
          <S.ContainerApart>
            <Grid item xs={12}>
              {children}
            </Grid>
            <S.SessionUserContainer>
              <S.ContainerNotification>
                {iconNotification && (
                  <S.IconNotification
                    onClick={showNotificationBox}
                    notificationActive={notificationActive}
                  >
                    {iconNotification}
                  </S.IconNotification>
                )}
                {childrenNotification && (
                  <div ref={nodeNotification}>
                    {showNotifications && (
                      <>
                        {width > 500 ? (
                          <S.NotificationList>
                            {childrenNotification}
                          </S.NotificationList>
                        ) : (
                          <S.Modal>
                            <div ref={nodeNotificationModal}>
                              <S.ModalContainer>
                                <S.ButtonClose onClick={showNotificationBox}>
                                  <Clear size={30} color="#fff" />
                                </S.ButtonClose>
                                <S.NotificationModalContent>
                                  {childrenNotification}
                                </S.NotificationModalContent>
                              </S.ModalContainer>
                            </div>
                          </S.Modal>
                        )}
                      </>
                    )}
                  </div>
                )}
              </S.ContainerNotification>

              <Spacing
                style={{ cursor: 'pointer' }}
                ds="flex"
                onClick={showDropdown}
              >
                {image && <S.ImageProfile src={image} alt="" />}
                <S.ArrowDown>
                  <KeyboardArrowDown size={25} />
                </S.ArrowDown>
              </Spacing>

              <div ref={node}>
                {isShow && (
                  <S.DropDownContainer>
                    <S.DropDownItem onClick={showDropdown}>
                      <Spacing mr={2}>
                        <S.TextCard>{name}</S.TextCard>
                      </Spacing>
                      <Spacing ds="flex" style={{ alignItems: 'center' }}>
                        {image && <S.ImageProfile src={image} alt="" />}
                        <S.ArrowDown>
                          <KeyboardArrowUp size={25} />
                        </S.ArrowDown>
                      </Spacing>
                    </S.DropDownItem>

                    {dropDownOptions.map((opt) => (
                      <S.DropDownItem key={opt.id} onClick={opt.func}>
                        <S.TextCard>
                          {opt.icon && (
                            <S.IconDropdownItem>{opt.icon}</S.IconDropdownItem>
                          )}
                          {opt.name}
                        </S.TextCard>
                      </S.DropDownItem>
                    ))}

                    <S.DropDownItem onClick={logoutFunc}>
                      <S.TextCard>
                        <S.IconDropdownItem>
                          <ExitToApp size={25} />
                        </S.IconDropdownItem>
                        Logout
                      </S.TextCard>
                    </S.DropDownItem>
                  </S.DropDownContainer>
                )}
              </div>
            </S.SessionUserContainer>
          </S.ContainerApart>
        </Grid>
      </S.AlignmentHeader>
    </S.Header>
  );
}

Header.propTypes = {
  /**
   * receives a boolean value to activate the sidebar.
   */
  open: PropTypes.bool,
  /**
   * The dropdown options.
   */
  dropDownOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),

  /**
   * receives a icon.
   */
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /**
   * says if the notification be active.
   */
  notificationActive: PropTypes.bool,
  /**
   * receives a icon.
   */
  iconNotification: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * name on card profile.
   */
  name: PropTypes.string,

  /**
   * image on card profile.
   */
  image: PropTypes.string,
  /**
   * receives a boolean value to activate the sidebar.
   */
  setOpen: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /**
   * receive a handle function.
   */
  onClick: PropTypes.func,
  /**
   * logout function
   */
  logoutFunc: PropTypes.node,
  /**
   * childrenTitle element
   */
  childrenTitle: PropTypes.node,
  /**
   * childrenTitle element
   */
  childrenNotification: PropTypes.node,
  /**
   * children element
   */
  children: PropTypes.node,
};

Header.defaultProps = {
  open: false,
};
