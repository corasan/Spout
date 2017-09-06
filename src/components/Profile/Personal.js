import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import styles from './styles'

class Personal extends Component {
  render() {
    const user = this.props.user
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <Text>{`${user.firstname} ${user.lastname}`}</Text>
        </View>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
      </View>
    )
  }
}

export default Personal
