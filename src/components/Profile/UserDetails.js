import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

class UserDetails extends Component {
  render() {
    const user = this.props.user
    return (
      <View>
        <View style={styles.user}>
          <Image source={require('../../assets/user-male.png')} />
          <View style={styles.namesArea}>
          <Text style={styles.name}>{`${user.firstname} ${user.lastname}`}</Text>
            <Text style={styles.username}>{user.username}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default UserDetails
