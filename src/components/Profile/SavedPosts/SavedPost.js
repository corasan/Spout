import React, { Component } from 'react'
import { View, Text, AsyncStorage, FlatList } from 'react-native'

import styles from './styles'

const SavedPost = (props) => {
  const post = props.post.node
  return (
    <View key={props.id} style={styles.savedPost}>
      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.savedPostAgreeDisagree}>
        <Text style={styles.influenceText}>{`${post.agrees} agree and `}</Text>
        <Text style={styles.influenceText}>{`${post.disagrees} Disagree`}</Text>
      </View>
    </View>
  )
}

export default SavedPost
