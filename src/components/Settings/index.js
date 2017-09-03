import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Settings</Text>
        <TouchableOpacity onPress={() => {
          AsyncStorage.removeItem('UserSession', (error) => {
            if (!error) {
              Actions.login()
            }
          })
        }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Settings
