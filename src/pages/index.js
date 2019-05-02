import React from "react"
import { graphql } from 'gatsby'
import "./index.less"
import User from "../components/user/"

export default ({ data }) => {
  const users = data.allRandomUser.edges;
  const { copyright, title } = data.markdownRemark.frontmatter;
  return (
    <div className="app">
      <h1>{title}</h1>

      <div className="users-container">
        {users.map((user, i) => <User user={user.node} />)}
      </div>
      
      <p>{copyright}</p>
    </div>
  );
}

export const query = graphql`
  query HomePageData {
    markdownRemark {
      frontmatter {
        title
        copyright
      }
    }
    allRandomUser {
      edges {
        node {
          gender
          name {
            title
            first
            last
          }
          picture {
            large
            medium
            thumbnail
          }
        }
      }
    }
  }
`