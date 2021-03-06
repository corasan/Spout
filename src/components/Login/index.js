import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar, AsyncStorage, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SigninUser from '../../mutations/SigninUserMutation'

import styles from './styles'

const { height } = Dimensions.get('window')

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  
  componentDidMount() {
    this.getSession().done()
  }

  getSession = async () => {
    try {
      const session = await AsyncStorage.getItem('UserSession')
      session && Actions.replace('main')
    } catch (error) {
      console.log(error)
    }
  }

  login = () => {
    const { email, password } = this.state
    SigninUser(email, password)
  }

  render() {
    return (
      <Image source={require('../../assets/login-background.png')} style={styles.loginContainer}>
        <View style={styles.loginBoxContainer}>
          <View style={{ alignItems: 'center', marginVertical: 12 }}>
            <Image source={require('../../assets/logo-login.png')} style={styles.logo} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
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

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginBtnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
              <Text style={styles.loginBtnText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ position: 'absolute', top: height - 50 }}>
          <TouchableOpacity onPress={Actions.signup}>
            <Text style={styles.signupBtnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}

export default Login
