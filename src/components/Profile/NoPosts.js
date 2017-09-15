import React, { Component } from 'react'
import { View, Text, AsyncStorage, FlatList } from 'react-native'

import styles from './styles'

const NoPosts = (props) => (
  <View style={styles.noPosts}>
    <Text style={styles.noPostsText}>{props.msg}</Text>
  </View>
)

export default NoPosts
