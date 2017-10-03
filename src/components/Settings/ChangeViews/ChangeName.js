import React, { Component } from 'react'
import { View, Text, AsyncStorage, AlertIOS } from 'react-native'
import { EditView, EditInput } from './EditView'
import UpdateFirstname from '../../../mutations/UpdateFirstnameMutation'
import UpdateLastname from '../../../mutations/UpdateLastnameMutation'
import changeProfile from '../changeProfile'

class ChangeName extends Component {
  state = {
    firstname: '',
    lastname: '',
  }

  handleNameChange = (uid, firstname, lastname) => {
    if (firstname === '' && lastname === '') {
      AlertIOS.alert(
        'Settings',
        `You must enter a new First/Last name to save changes, or enter your old First/Last name if you want to change it.`
      )
    } else {
      UpdateFirstname(uid, firstname)
      UpdateLastname(uid, lastname)
    }
  }

  render() {
    return (
      <EditView
        pageName={this.props.pageName}
        onSubmit={() => this.handleNameChange(
          this.props.uid,
          this.state.firstname,
          this.state.lastname,
        )}
      >
        <EditInput
          placeholder="First Name"
          input={this.state.firstname}
          onChangeText={firstname => this.setState({ firstname }) }
        />
        <EditInput
          placeholder="Last Name"
          input={this.state.lastname}
          onChangeText={lastname => this.setState({ lastname })}
        />
      </EditView>
    )
  }
}

export default changeProfile(ChangeName)
