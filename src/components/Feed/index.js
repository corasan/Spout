import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../Environment'
import PostList from './PostList'

// import styles from './styles'

const FeedQuery = graphql`
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
            }
          }
        }
      }
    }
  }
`

const Feed = () => (
  <QueryRenderer
    environment={environment}
    query={FeedQuery}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>
      } else if (props) {
        return <PostList viewer={props.viewer} />
      }
      return <Text>Loading</Text>
    }}
  />
)

// Feed.propTypes = {
  // viewer: PropTypes.objectOf(PropTypes.object).isRequired,
// }

export default Feed
