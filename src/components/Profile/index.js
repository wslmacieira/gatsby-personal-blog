import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

// import { Container } from './styles';

const Profile = () => (
  <StaticQuery
    query={graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
    `}

    render={({ site: { siteMetadata: { title, position, description } } }) => (
      <div className="profile-wrapper">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )
    }
  />
);

export default Profile;
