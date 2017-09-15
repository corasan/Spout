import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../../Environment'
import MyPostsList from './MyPostsList'

const MyPostsQuery = graphql`
  query MyPostsQuery ($filter: PostFilter) {
    viewer {
      allPosts(filter: $filter) {
        edges {
          node {
            content
            agrees { count }
            disagrees { count }
          }
        }
      }
    }
  }
`

const MyPosts = (props) => (
  <QueryRenderer
    environment={environment}
    query={MyPostsQuery}
    variables={{ 
      filter: {
        author: {id: props.uid }
      }
    }}
    render={({ error, props}) => {
      if (error) {
        return <Text>{error.message}</Text>
      } else if (props) {
        return <MyPostsList posts={props.viewer.allPosts.edges} />
      }
      return <Text>Loading</Text>
    }}
  />
)

export default MyPosts
