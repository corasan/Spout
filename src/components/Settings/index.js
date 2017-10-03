import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Dimensions, AlertIOS } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { EditSetting, SettingsSection, SwitchSetting } from './SettingsComponents'

import styles from './styles'

class Settings extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.loadUserData().done()
  }

  loadUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('UserProfile')
      user && this.setState({ user: JSON.parse(user) })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const user = this.state.user
    const name = `${user.firstname} ${user.lastname}`

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.userArea}>
          <Text style={styles.settingsText}>Settings</Text>

          <View style={styles.userDetails}>
            <View style={styles.userPicCircle} />

            <View style={{ marginLeft: 25 }}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.username}>{user.username}</Text>

              <TouchableOpacity
                onPress={() => {
                  AsyncStorage.removeItem('UserSession', (error) => !error && Actions.login())
                }}
                style={styles.logoutBtn}
              >
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <SettingsSection sectionTitle="Profile">
          <EditSetting
            label="Name"
            data={name}
            goTo={() => Actions.changeName({ pageName: name })}
          />
          <EditSetting
            label="Username"
            data={user.username}
            goTo={() => Actions.changeUsername({ pageName: user.username })}
          />
          <EditSetting
            label="Email"
            data={user.email}
            goTo={() => AlertIOS.alert('Settings', 'Can\'t change email')}
          />
        </SettingsSection>

        <SettingsSection sectionTitle="App">
          <SwitchSetting label="Notifications" />
        </SettingsSection>
      </View>
    )
  }
}
  
export default Settings
  