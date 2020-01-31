import React from "react";

import Layout from "../components/_Layout";
import SEO from "../components/seo";
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <PostItem
    slug="/about/"
    category="Misc"
    date="31 de Janeiro de 2020"
    timeToRead="5"
    title="Diga não ao Medium: tenha sua própria plataforma"
    description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
    />
  </Layout>
)

export default IndexPage;
