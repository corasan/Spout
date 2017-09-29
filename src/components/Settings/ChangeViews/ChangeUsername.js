import React, { Component } from 'react'
import { View, Text, AlertIOS, AsyncStorage } from 'react-native'
import { EditView, EditInput } from './EditView'
import UpdateUsername from '../../../mutations/UpdateUsernameMutation'
import changeProfile from '../changeProfile'

class ChangeUsername extends Component {
  state = {
    username: '',
  }

  handleUsernameChange = (uid, username) => {
    if (username === '') {
      AlertIOS.alert('Nothing changed.')
    } else {
      UpdateUsername(uid, username)
    }
  }

  render() {
    return (
      <EditView
        pageName={this.props.pageName}
        onSubmit={() => this.handleUsernameChange(this.props.uid, this.state.username)}
      >
        <EditInput
          placeholder="Username"
          input={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
      </EditView>
    )
  }
}

export default changeProfile(ChangeUsername)
