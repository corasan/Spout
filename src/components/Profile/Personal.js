import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

class Personal extends Component {
  render() {
    const user = this.props.user
    return (
      <View>
        <Text>{user.username}</Text>
        <Text>{user.firstname}</Text>
        <Text>{user.lastname}</Text>
        <Text>{user.email}</Text>
      </View>
    )
  }
}

export default Personal
