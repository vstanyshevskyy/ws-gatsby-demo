import React from "react"
import { graphql } from 'gatsby'
import User from "../components/user/"

export default ({ data }) => {
  const users = data.allRandomUser.edges;
  return (
    <div>
      {users.map((user, i) => <User user={user.node} />)}
    </div>
  );
}

export const query = graphql`
  query RandomUserQuery {
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