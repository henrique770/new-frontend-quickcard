import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchOutline,
  ArrowForwardOutline,
  CloseOutline,
} from '@styled-icons/evaicons-outline';
import { Input, Grid, Spacing } from '~/lib';

import * as S from './styled';

export default function Search({
  placeholder,
  onSubmit,
  searchRef,
  value,
  onChange,
  resetFunc,
  query,
}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <form onSubmit={onSubmit}>
      <S.SearchContainer>
        <Input
          ref={searchRef}
          icon={<SearchOutline size={17} color="#636D73" />}
          type="text"
          padding="1rem 1.6rem 1rem 4.6rem"
          radius="8px"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        {isShown && (
          <Grid container>
            {query !== null && (
              <S.ButtonReset
                onClick={resetFunc}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <CloseOutline size={23} color="#fff" />
              </S.ButtonReset>
            )}
            <Spacing mr={2} />
            <S.ButtonSubmit
              type="submit"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <ArrowForwardOutline size={23} color="#fff" />
            </S.ButtonSubmit>
          </Grid>
        )}
      </S.SearchContainer>
    </form>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  searchRef: PropTypes.func,
  resetFunc: PropTypes.func,
  query: PropTypes.string,
};
