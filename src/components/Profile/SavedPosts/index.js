import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../../Environment'
import SavedPostsList from './SavedPostsList'
import NoPosts from '../NoPosts'

const SavedPostsQuery = graphql`
  query SavedPostsQuery($id: ID!) {
    viewer {
      User(id: $id) {
        savedPosts {
          edges {
            node {
              id
              content
              agrees
              disagrees
            }
          }
        }
      }
    }
  }
`

const SavedPosts = (props) => (
  <QueryRenderer
    environment={environment}
    query={SavedPostsQuery}
    variables={{id: props.uid}}
    render={({ error, props}) => {
      if (error) {
        return <Text>{error.message}</Text>
      } else if (props) {
        const posts = props.viewer.User.savedPosts.edges
        const msg = 'You haven\'t saved any posts yet'
        return posts.length !== 0 ? <SavedPostsList posts={posts} /> : <NoPosts msg={msg} />
      }
      return <Text>Loading</Text>
    }}
  />
)

export default SavedPosts
