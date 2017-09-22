import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { Actions } from 'react-native-router-flux'
import RecentPostsList from './RecentPostsList'
import PopularPostsList from './PopularPostsList'
import { CreatePostIcon } from '../../ui/icons'
import { LIGHT_TEXT, TINT } from '../../ui/theme'

import styles from './styles'

class PostFeed extends Component {
  constructor() {
    super()
    this.state = {
      createPostVisible: false,
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Spout</Text>

          <TouchableOpacity
            style={{ position: 'absolute', top: 28, right: 15 }}
            onPress={() => Actions.createPost({ createPostVisible: true })}
          >
            <CreatePostIcon />
          </TouchableOpacity>
        </View>

        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar
              style={styles.tabStyle}
            />
          )}
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
