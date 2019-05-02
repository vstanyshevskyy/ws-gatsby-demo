import React from "react"
import { graphql } from 'gatsby'
import "./index.less"
import User from "../components/user/"

export default ({ data }) => {
  console.log(data);
  const users = data.allRandomUser.edges;
  return (
    <div className="users-container">
      {users.map((user, i) => <User user={user.node} />)}
    </div>
  );
}

export const query = graphql`
  query HomePageData {
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