import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TextSetting, SettingsSection } from './Settings'

import styles from './styles'

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

        <SettingsSection sectionTitle="Profile">
          <TextSetting label="Name" data="Henry Paulino" />
          <TextSetting label="Username" data="corasan" />
          <TextSetting label="Email" data="henrypl360@gmail.com" />
        </SettingsSection>
      </View>
    )
  }
}
  
  export default Settings
  