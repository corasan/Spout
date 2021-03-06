import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Feed from '../Feed'
import Profile from '../Profile'
import Settings from '../Settings'
import TabBar from './tabBar'

class Main extends Component {
  componentWillMount() {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle('light-content', true)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <TabBar />} initialPage={0}>
          <Feed tabLabel="home" />
          <Profile tabLabel="user" />
          <Settings tabLabel="settings" />
        </ScrollableTabView>
      </View>
    )
  }
}

export default Main
