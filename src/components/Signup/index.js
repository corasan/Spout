import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CreateUser from '../../mutations/CreateUserMutation'

import styles from './styles'

const { height } = Dimensions.get('window')

// TODO: make my own Text component with default font
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    }
  }

  signup = () => {
    const { firstname, lastname, username, email, password } = this.state
    CreateUser(firstname, lastname, username, email, password)
  }

  render() {
    return (
      <Image source={require('../../assets/login-background.png')} style={styles.signupContainer}>
        <View style={styles.signupBoxContainer}>
          <View style={{ alignItems: 'center', marginVertical: 12 }}>
            <Image source={require('../../assets/logo-login.png')} style={styles.logo} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Username"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          </View>

          <View style={styles.nameContainer}>
            <View style={[styles.inputContainer, { flex: 1, paddingRight: 4 }]}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={this.state.firstname}
                onChangeText={firstname => this.setState({ firstname })}
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1, paddingLeft: 4 }]}>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={this.state.lastname}
                onChangeText={lastname => this.setState({ lastname })}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Confirm Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </View>

          <View style={styles.signupBtnContainer}>
            <TouchableOpacity onPress={() => this.signup()} style={styles.signupBtn}>
              <Text style={styles.signupBtnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: 'absolute', top: height - 50 }}>
          <TouchableOpacity onPress={Actions.pop}>
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}

export default Signup