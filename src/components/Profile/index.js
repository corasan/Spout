import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import AnimatedTabs from 'rn-animated-tabs';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import environment from '../../Environment'
import MyPosts from './MyPosts'
import SavedPosts from './SavedPosts'
import { DARKER_GRAY, TINT } from '../../ui/theme'

import styles from './styles'

const ProfileQuery = graphql`
  query ProfileQuery($id: ID!) {
    viewer {
      User(id: $id) {
        username
        firstname
        lastname
        influence
      }
    }
  }
`

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      uid: '',
      currentTab: 0,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('UserSession', (error, data) => {
      const user = JSON.parse(data)
      if (user) {
        this.setState({ uid: user.uid })
      }
    })
  }

  renderProfile = (props) => {
    const user = props.viewer.User
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.user}>
            <View style={styles.namesArea}>
              <Text style={styles.name}>{`${user.firstname} ${user.lastname}`}</Text>
              <Text style={styles.username}>{`@${user.username}`}</Text>
            </View>
          </View>
        </View>

        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar
              style={styles.tabStyle}
            />
          )}
          tabBarInactiveTextColor={DARKER_GRAY}
          tabBarActiveTextColor={TINT}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        >
          <SavedPosts uid={this.state.uid} tabLabel="Saved" />
          <MyPosts tabLabel="Posted" />
        </ScrollableTabView>
      </View>
    )
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ProfileQuery}
        variables={{ id: this.state.uid }}
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
