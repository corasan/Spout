import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import moment from 'moment'
import _ from 'lodash'
// import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import {
  AgreeIcon,
  DisagreeIcon,
  MenuMore,
  AgreeIconPressed,
  DisagreeIconPressed,
} from '../../ui/icons'
import CreateAgree from '../../mutations/CreateAgreeMutation'
import CreateDisagree from '../../mutations/CreateDisagreeMutation'

import styles from './styles'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      agreePressed: false,
      disagreePressed: false,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('UserSession', (err, data) => {
      if (data) {
        const session = JSON.parse(data)
        this.setState({ uid: session.uid})
      }
    })

    const agrees = this.props.post.node.agrees.edges
    const disagrees = this.props.post.node.disagrees.edges

    _.each(agrees, (agree, i) => {
      if (!_.includes(agree.node.user, this.state.uid)) {
        this.setState({ agreePressed: true })
      } else if (!_.includes(agree.node.user, this.state.uid)) {
        this.setState({ agreePressed: true })
      }
    })
  }

  // renderDeletePost = (uid) => {
  //   if (this.state.user.uid === uid) {
  //     return (
  //       <MenuOption value={'Delete'}>
  //         <Text style={styles.deletePost}>Delete</Text>
  //       </MenuOption>
  //     )
  //   }
  //   return null
  // }

  // handleMenuSelect = (option, postId) => {
  //   if (option === 'Delete') {
  //     // this.props.deletePost(postId)
  //   }
  // }

  handleAgreeButton = (postId) => {
    const agrees = this.props.post.node.agrees.edges
    if (!this.state.agreePressed) {
      CreateAgree(postId, this.state.uid)
      this.setState({
        agreePressed: !this.state.agreePressed,
        disagreePressed: false,
      })
    }    
  }

  handleDisagreeButton = (postId) => {
    if (!this.state.disagreePressed) {
      CreateDisagree(postId, this.state.uid)
      this.setState({
        disagreePressed: !this.state.disagreePressed,
        agreePressed: false
      })
    }
  }

  renderAgreeIcon = (postId) => {
    const pressed = this.state.agreePressed
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.icons}>
          {pressed ? <AgreeIconPressed /> : <AgreeIcon />}
        </View>
        <Text style={[styles.agreeAndDisagreeButton, { color: pressed ? '#1ABC9C' : '#bcbcbc' }]}>Agree</Text>
      </View>
    )
  }

  renderDisagreeIcon = () => {
    const pressed = this.state.disagreePressed
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.icons, { marginTop: 5 }]}>
          {pressed ? <DisagreeIconPressed /> : <DisagreeIcon />}
        </View>
        <Text style={[styles.agreeAndDisagreeButton, { color: pressed ? '#1ABC9C' : '#bcbcbc' }]}>Disagree</Text>
      </View>
    )
  }

  // renderMenu = (uid, postId) => (
  //   <View>
  //     <Menu onSelect={value => this.handleMenuSelect(value, postId)}>
  //       <MenuTrigger>
  //         <MenuMore />
  //       </MenuTrigger>
  //       <MenuOptions>
  //         <MenuOption>
  //           <Text>Save</Text>
  //         </MenuOption>
  //         {this.renderDeletePost(uid)}
  //       </MenuOptions>
  //     </Menu>
  //   </View>
  // )

  render() {
    const post = this.props.post.node
    return (
      // <MenuContext>
      <View style={styles.postBox}>
        <View style={styles.postRow}>
          <View style={styles.leftCol}>
            <Image source={require('../../assets/user-male.png')} />
          </View>

          <View style={styles.rightCol}>
            <View style={styles.postHeader}>
              <Text style={styles.usernameText}>{post.author.username}</Text>
              <Text style={styles.timeAgoText}>{moment(post.createdAt).fromNow()}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.postContentText}>{post.content}</Text>

        <View style={{ marginTop: 18, flexDirection: 'row' }}>
          <Text style={[styles.agreeAndDisagreeText, { marginRight: 6 }]}>{post.agrees.count} agree</Text>
          <Text style={styles.agreeAndDisagreeText}>{post.disagrees.count} disagree</Text>
        </View>

        <View style={styles.lineDivide} />

        <View style={styles.postRow}>
          <View style={[styles.postRow, { justifyContent: 'flex-start', marginTop: 4 }]}>
            <TouchableOpacity
              style={{ marginTop: 1, marginRight: 12 }}
              onPress={() => this.handleAgreeButton(post.id)}
            >
              {this.renderAgreeIcon()}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handleDisagreeButton(post.id)}>
              {this.renderDisagreeIcon()}
            </TouchableOpacity>
          </View>

          {/* <View style={{ justifyContent: 'flex-end' }}>
            {this.renderMenu(post.ownerUid, post.id)}
          </View> */}
        </View>
      </View>
      // </MenuContext>
    )
  }
}

export default Post
