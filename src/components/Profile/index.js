import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../Environment'
import Personal from './Personal'

const ProfileQuery = graphql`
  query ProfileQuery($id: ID!) {
    viewer {
      User(id: $id) {
        username
        firstname
        lastname
        email
        influence
      }
    }
  }
`

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('UserSession', (error, data) => {
      const user = JSON.parse(data)
      if (user) {
        // console.log(user.uid)
        this.setState({ id: user.uid })
      }
    })
  }

  render() {
    console.log('the id', this.state.id)
    return (
      <QueryRenderer
        environment={environment}
        query={ProfileQuery}
        variables={{
          id: this.state.id
        }}
        render={({ error, props}) => {
          if (error) {
            console.log('the error', error)
            return <Text>{error.message}</Text>
          } else if (props) {
            return <Personal user={props.viewer.User}/>
          }
          return <Text>Loading</Text>
        }}
      />
    )
  }
}

export default Profile
