import React from 'react';
import propTypes from 'prop-types';
import * as S from './styles';

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        to={previous.fields.slug}
        className="previous"
        direction="left"
        bg="#16202c"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        to={next.fields.slug}
        className="next"
        direction="left"
        bg="#16202c"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
