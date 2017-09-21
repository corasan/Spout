import React, { Component } from 'react'
import { View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MAIN, LIGHT_TEXT, TINT, DARKER_GRAY } from './theme'

export class CreatePostIcon extends Component {
  setNativeProps(nativeProps) {
    this.createPost.setNativeProps(nativeProps)
  }

  render() {
    return (
      <View ref={thisComponent => this.createPost = thisComponent}>
        <SimpleLineIcons name="note" size={22} color={MAIN} />
      </View>
    )
  }
}

export const LikeIcon = () => (
  <Ionicons name="ios-heart-outline" size={22} color={DARKER_GRAY} />
)

export const LikeIconPressed = () => (
  <Ionicons name="ios-heart" size={22} color='#E74C3C' />
)

export const MenuMore = () => (
  <MaterialIcon name="more-horiz" size={24} color={DARKER_GRAY} style={{ marginBottom: 2 }} />
)

export const SavePostIcon = () => (
  <Ionicons name="ios-bookmark-outline" size={22} color={DARKER_GRAY} />
)

// export const SavePostIconPressed = () => (
//   <Ionicons name="ios-bookmark-outline" size={22} color={DARKER_GRAY} />
// )
