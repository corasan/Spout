import React, { Component } from 'react'
import { View, Text, AlertIOS, AsyncStorage } from 'react-native'
import { EditView, EditInput } from './EditView'
import UpdateUsername from '../../../mutations/UpdateUsernameMutation'

class ChangeUsername extends Component {
  state = {
    uid: '',
    username: '',
  }

  componentDidMount() {
    this.getSession().done()
  }

  getSession = async () => {
    try {
      const userProfile = await AsyncStorage.getItem('UserProfile')
      const { uid } = JSON.parse(userProfile)
      this.setState({ uid })
    } catch (error) {
      console.log(error)
    }
  }

  handleUsernameChange = () => {
    if (this.state.username === '') {
      AlertIOS.alert('Nothing changed.')
    } else {
      UpdateUsername(this.state.uid, this.state.username)
    }
  }

  render() {
    return (
      <EditView pageName={this.props.pageName} onSubmit={() => this.handleUsernameChange()}>
        <EditInput
          placeholder="Username"
          input={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
      </EditView>
    )
  }
}

export default ChangeUsername
