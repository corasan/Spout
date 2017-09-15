import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../../Environment'
import SavedPostsList from './SavedPostsList'

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
    variables={{ 
      filter: {
        author: {id: props.uid }
      }
    }}
    render={({ error, props}) => {
      if (error) {
        return <Text>{error.message}</Text>
      } else if (props) {
        return <SavedPostsList posts={props.viewer.allPosts.edges} />
      }
      return <Text>Loading</Text>
    }}
  />
)

export default SavedPosts
