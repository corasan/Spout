import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

const { width } = Dimensions.get('window')

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.userArea}>
          <Text style={styles.settingsText}>Settings</Text>

          <View style={styles.userDetails}>
            <View style={styles.userPicCircle} />

            <View style={{ marginLeft: 25 }}>
              <Text style={styles.name}>Henry Paulino</Text>
              <Text style={styles.username}>@corasan</Text>

              <TouchableOpacity onPress={() => {
                AsyncStorage.removeItem('UserSession', (error) => {
                    if (!error) Actions.login()
                  })
                }}
                style={styles.logoutBtn}
              >
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.settingsSectionTittle}>Profile</Text>

          <View style={[styles.settingOptionContainer, { width }]}>
            <Text style={styles.settingOptionLabel}>Name</Text>

            <Text style={styles.settingOptionData}>Henry Paulino</Text>
          </View>
        </View>
      </View>
    )
  }
}
  
  export default Settings
  