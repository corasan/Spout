import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import RecentPostsList from './RecentPostsList'
import PopularPostsList from './PopularPostsList'
import { LIGHT_TEXT, TINT } from '../../ui/theme'

import styles from './styles'

class PostFeed extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Spout</Text>
        </View>

        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar
              style={styles.tabStyle}
            />
          )}
          // style={}
          tabBarInactiveTextColor={LIGHT_TEXT}
          tabBarActiveTextColor={TINT}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        >
          <RecentPostsList posts={this.props.viewer.allPosts} tabLabel="Recent" />
          <PopularPostsList tabLabel="Popular" />
        </ScrollableTabView>
      </View>
    )
  }
}

export default PostFeed
