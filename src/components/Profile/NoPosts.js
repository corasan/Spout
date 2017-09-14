import React, { Component } from 'react'
import { View, Text, AsyncStorage, FlatList } from 'react-native'

import styles from './styles'

const NoPosts = () => (
  <View style={styles.noPosts}>
    <Text style={styles.noPostsText}>You haven't saved any posts yet</Text>
  </View>
)

export default NoPosts
