import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, TouchableOpacity, Image, TextInput, Dimensions, Alert, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CreateNewPost from '../../mutations/CreatePostMutation'

import styles from './styles'

const charLimit = 240
const { width } = Dimensions.get('window')

class CreatePost extends Component {
  static propTypes = {
    createPostVisible: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      createPostVisible: this.props.createPostVisible,
      author: '',
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('UserSession', (err, data) => {
      if (data) {
        const user = JSON.parse(data)
        this.setState({ author: user.uid})
      } else {
        console.error(err)
      }
    })
  }

  renderCharactersLeft = () => {
    const left = charLimit - this.state.content.length
    return (
      <Text style={[styles.charsLeft, { color: left <= 10 ? 'red' : '#34495E' }]}>{left}</Text>
    )
  }

  closeModal = () => {
    this.setState({ createPostVisible: !this.state.createPostVisible })
    Actions.pop()
  }

  createNewPost = () => {
    if (this.state.content === '') {
      Alert.alert('Write something first!')
      return null
    }
    this.closeModal()
    CreateNewPost(this.state.content, this.state.author)
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.createPostVisible}
        onRequestClose={() => Actions.pop()}
      >
        <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModalBtn}>
          <Image source={require('../../assets/close.png')} style={styles.closeModalIcon} />
        </TouchableOpacity>

        <View style={styles.createPostContainer}>
          <Text style={styles.tellTheWorld}>Tell us what you are feeling... Let it out!</Text>
          <View style={{ width: width - 40 }}>
            <TextInput
              multiline
              autoFocus
              maxLength={charLimit}
              returnKeyType="send"
              onContentSizeChange={(event) => {
                this.setState({ height: event.nativeEvent.contentSize.height })
              }}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === 'Enter') {
                  this.createNewPost()
                }
              }}
              onChangeText={(content) => {
                this.setState({ content })
              }}
              value={this.state.content}
              style={[styles.postInput, { height: Math.max(140, this.state.height) }]}
            />
            <View style={{ position: 'absolute', right: 4, bottom: 2, opacity: 0.2 }}>
              {this.renderCharactersLeft()}
            </View>
          </View>

          <View style={styles.sendPostBtnContainer}>
            <TouchableOpacity style={styles.senPostBtn} onPress={() => this.createNewPost()}>
              <Text style={styles.sendPostText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

export default CreatePost
