import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import AnimatedTabs from 'rn-animated-tabs';
import environment from '../../Environment'
import UserDetails from './UserDetails'
import MyPostsList from './MyPostsList'
import SavedPostsList from './SavedPostsList'

import styles from './styles'

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
      currentTab: 0,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('UserSession', (error, data) => {
      const user = JSON.parse(data)
      if (user) {
        this.setState({ id: user.uid })
      }
    })
  }

  renderProfile = (props) => {
    const tabContent = [<MyPostsList />, <SavedPostsList />]
    return (
      <View style={styles.container}>
        <UserDetails user={props.viewer.User}/>
        <AnimatedTabs
          tabTitles={['Saved Posts', 'My Posts']}
          onChangeTab={(currentTab) => this.setState({ currentTab })}
          activeTabIndicatorColor='#1ABC9C'
          containerStyle={styles.tabContainerStyle}
          tabTextStyle={{ fontFamily: 'Chalkboard SE' }}
        />
        {tabContent[this.state.currentTab]}
      </View>
    )
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ProfileQuery}
        variables={{
          id: this.state.id
        }}
        render={({ error, props}) => {
          if (error) {
            return <Text>{error.message}</Text>
          } else if (props) {
            return this.renderProfile(props)
          }
          return <Text>Loading</Text>
        }}
      />
    )
  }
}

export default Profile
