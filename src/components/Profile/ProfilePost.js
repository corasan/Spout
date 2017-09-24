import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default (props) => {
  const post = props.post.node
  let peopleCount = `${post.agrees.count} people like this`
  
  if (post.agrees.count === 1) {
    peopleCount = `${post.agrees.count} person likes this`
  } else if (post.agrees.count === 0) {
    peopleCount = 'No likes yet'
  }

  return (
    <View key={props.id} style={styles.post}>
      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.likes}>
        <Text style={styles.likesText}>{`${peopleCount}`}</Text>
      </View>
    </View>
  )
}
