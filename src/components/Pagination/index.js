import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import * as S from './styles';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink cover to={prevPage} direction="left" bg="#16202c">
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage}
{' '}
de
{numPages}
    </p>
    {!isLast && (
      <AniLink cover to={nextPage} direction="left" bg="#16202c">
        proxima página →
      </AniLink>
    )}
  </S.PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
