import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/_Layout";
import SEO from "../components/seo";
import PostItem from '../components/PostItem';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
            }
            timeToRead
          }
        }
      }
    }
    `
  )

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: { title, background, category, date, description },
          timeToRead,
        },
      }) => (
          <PostItem
            slug="/about/"
            category={category}
            background={background}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        ))}

    </Layout>
  )

}

export default IndexPage;
