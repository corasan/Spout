import React, { Component } from 'react'
import { View, Text, AsyncStorage, AlertIOS } from 'react-native'
import { EditView, EditInput } from './EditView'
import UpdateFirstname from '../../../mutations/UpdateFirstnameMutation'
import UpdateLastname from '../../../mutations/UpdateLastnameMutation'

class ChangeName extends Component {
  state = {
    firstname: '',
    lastname: '',
    uid: '',
    fullName: '',
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

  handleNameChange = () => {
    if (this.state.firstname === '' && this.state.lastname === '') {
      AlertIOS.alert(
        'Settings',
        `You must enter a new First/Last name to save changes, or enter your old First/Last name if you want to change it.`
      )
    } else {
      UpdateFirstname(this.state.uid, this.state.firstname)
      UpdateLastname(this.state.uid, this.state.lastname)
    }
  }

  render() {
    return (
      <EditView pageName={this.props.pageName} onSubmit={() => this.handleNameChange()}>
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

export default ChangeName
