import React from 'react'
import { Text } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../Environment'
import PostList from './PostList'

import FeedQuery from './FeedQuery'

const Feed = () => (
  <QueryRenderer
    environment={environment}
    query={FeedQuery}
    render={({ error, props }) => {
      if (error) {
        return <Text>{error.message}</Text>
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
