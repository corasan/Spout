import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../../Environment'
import MyPostsList from './MyPostsList'
import NoPosts from '../NoPosts'

const MyPostsQuery = graphql`
  query MyPostsQuery ($filter: PostFilter) {
    viewer {
      allPosts(filter: $filter, orderBy: createdAt_DESC) {
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
        const posts = props.viewer.allPosts.edges
        const msg = 'You haven\'t posted anything yet'
        return posts.length !== 0 ? <MyPostsList posts={posts} /> : <NoPosts msg={msg} />
      }
      return <Text>Loading</Text>
    }}
  />
)

export default MyPosts
