import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { EditView, EditInput } from './EditView'
import changeProfile from '../changeProfile'

class ChangeEmail extends Component {
  state = {
    email: '',
  }

  render() {
    return (
      <EditView pageName={this.props.pageName} onSubmit={() => console.log('email changed')}>
        <EditInput
          placeholder="Email"
          input={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </EditView>
    )
  }
}


export default changeProfile(ChangeEmail)
