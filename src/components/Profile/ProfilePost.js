import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default (props) => {
  const post = props.post.node
  return (
    <View key={props.id} style={styles.post}>
      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.postAgreeDisagree}>
        <Text style={styles.agreeDisagreeText}>{`${post.agrees.count} agree and `}</Text>
        <Text style={styles.agreeDisagreeText}>{`${post.disagrees.count} Disagree`}</Text>
      </View>
    </View>
  )
}
