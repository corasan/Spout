import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, ListView, RefreshControl, StatusBar } from 'react-native'
import { AdMobBanner } from 'react-native-admob'
import Post from './Post'

class PopulatPostsList extends Component {
  render() {
    return (
      <View>
        <Text>Most populat posts</Text>
      </View>
    )
  }
}

export default PopulatPostsList
