export default graphql`
  query FeedQuery {
    viewer {
      allPosts(orderBy: createdAt_DESC) {
        edges {
          node {
            id
            content
            createdAt
            author {
              id
              username
            }
            agrees {
              count
              edges {
                node {
                  id
                  user {
                    id
                  }
                }
              }
            }
            disagrees {
              count
              edges {
                node {
                  id
                  user {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`