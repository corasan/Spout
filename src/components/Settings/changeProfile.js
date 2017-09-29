import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

const changeProfile = (WrappedComponent, handleOnSubmit) => {
  return class extends Component {
    state = {
      uid: '',
    }

    componentDidMount() {
      this.getProfile().done()
    }
  
    getProfile = async () => {
      try {
        const userProfile = await AsyncStorage.getItem('UserProfile')
        const { uid } = JSON.parse(userProfile)
        this.setState({ uid })
      } catch (error) {
        console.log(error)
      }
    }

    render() {
      return (
        <WrappedComponent uid={this.state.uid} {...this.props} /> 
      )
    }
  }
}

export default changeProfile
