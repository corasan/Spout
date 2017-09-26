import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import CreateNewPost from '../../mutations/CreatePostMutation'
import { EraseAllIcon } from '../../ui/icons'

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
      username: ''
    }
  }

  componentDidMount() {
    this.getSession().done()
  }

  getSession = async () => {
    try {
      const userSession = await AsyncStorage.getItem('UserSession')
      if (userSession) {
        const session = JSON.parse(userSession)
        this.setState({ author: session.uid, username: session.username })
      }
    } catch (error) {
      console.log(error)
    }
  }

  renderCharactersLeft = () => {
    const left = charLimit - this.state.content.length
    return (
      <Text style={[styles.charsLeft, { color: left <= 10 ? 'red' : '#D7D7D7' }]}>{left}</Text>
    )
  }

  closeModal = () => {
    // TODO: fix Actions.pop transition animation
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
        <View style={{ flexDirection: 'column' }}>
          <View>
            <Text style={styles.username}>{this.state.username}</Text>
            <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModalBtn}>
              <Image source={require('../../assets/close.png')} style={styles.closeModalIcon} />
            </TouchableOpacity>
          </View>

          <View style={{ width, marginTop: 50 }}>
            <TextInput
              placeholder="Say Something..."
              placeholderTextColor="#34495E"
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
              style={[styles.postInput, { height: Math.max(383, this.state.height) }]}
            />
            
          </View>

          <View style={[styles.postBarBox, { width }]}>
            <View style={{ left: 0, position: 'absolute', marginLeft: 20 }}>
              <EraseAllIcon />
            </View>

            <View>
              {this.renderCharactersLeft()}
            </View>

            <TouchableOpacity style={styles.sendPostBtn} onPress={() => this.createNewPost()}>
              <Text style={styles.sendPostText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

export default CreatePost

// <View>
// <Text style={styles.username}>{this.state.username}</Text>
// <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModalBtn}>
//   <Image source={require('../../assets/close.png')} style={styles.closeModalIcon} />
// </TouchableOpacity>
// </View>

// <KeyboardAvoidingView
// behavior="position"
// keyboardVerticalOffset={0}
// >
// <View style={styles.createPostContainer}>
//   <View style={{ width }}>
//     <TextInput
//       multiline
//       autoFocus
//       maxLength={charLimit}
//       returnKeyType="send"
//       onContentSizeChange={(event) => {
//         this.setState({ height: event.nativeEvent.contentSize.height })
//       }}
//       onKeyPress={(event) => {
//         if (event.nativeEvent.key === 'Enter') {
//           this.createNewPost()
//         }
//       }}
//       onChangeText={(content) => {
//         this.setState({ content })
//       }}
//       value={this.state.content}
//       style={[styles.postInput, { height: Math.max(310, this.state.height) }]}
//     />
//     <View style={{ position: 'absolute', right: 4, bottom: 2, opacity: 0.2 }}>
//       {this.renderCharactersLeft()}
//     </View>
//   </View>
// </View>
// <View style={{ backgroundColor: 'red', width, bottom: 0, position: 'absolute' }}>
//   <TouchableOpacity style={styles.sendPostBtn} onPress={() => this.createNewPost()}>
//     <Text style={styles.sendPostText}>Post</Text>
//   </TouchableOpacity>
// </View>
// </KeyboardAvoidingView>