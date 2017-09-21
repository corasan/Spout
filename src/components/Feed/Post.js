import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import moment from 'moment'
import _ from 'lodash'
// import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import {
  LikeIcon,
  DisagreeIcon,
  MenuMore,
  LikeIconPressed,
  DisagreeIconPressed,
} from '../../ui/icons'
import CreateAgree from '../../mutations/CreateAgreeMutation'
import CreateDisagree from '../../mutations/CreateDisagreeMutation'

import styles from './styles'

// TODO: FIX ALL ISSUES RELATED TO POST
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      likePressed: false,
      currentLike: '',
    }
    this.agrees = this.props.post.node.agrees.edges
    this.disagrees = this.props.post.node.disagrees.edges
  }

  componentWillMount() {
    AsyncStorage.getItem('UserSession', (err, data) => {
      if (data) {
        const session = JSON.parse(data)
        this.setState({ uid: session.uid})
      }
    }).then(() => {
      _.each(this.agrees, (agree) => {
        if (_.includes(agree.node.user, this.state.uid)) {
          this.setState({
            likePressed: true,
            currentLike: agree.node.id,
          })
        } 
      })
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

  handleLikeButton = (postId) => {
    if (!this.state.likePressed) {
      CreateAgree(postId, this.state.uid, this.state.currentDisagree)
      this.setState({
        likePressed: !this.state.likePressed,
      })
    }
  }

  renderLikeIcon = () => {
    const pressed = this.state.likePressed
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {pressed ? <LikeIconPressed /> : <LikeIcon />}
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
    const peopleCount = post.agrees.count === 1 ? 'person likes' : 'people like'
    return (
      // <MenuContext>
      <View style={styles.postBox}>
        <View style={styles.postRow}>
          {/* <View style={styles.leftCol}>
            <Image source={require('../../assets/user-male.png')} />
          </View> */}

          <View style={styles.rightCol}>
            <View style={styles.postHeader}>
              <Text style={styles.usernameText}>{post.author.username}</Text>
              <Text style={styles.timeAgoText}>{moment(post.createdAt).fromNow()}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.postContentText}>{post.content}</Text>

        <View style={styles.lineDivide} />

        <View style={styles.postRow}>
          <View style={[styles.postRow, { justifyContent: 'flex-start', marginTop: 4 }]}>
            <TouchableOpacity
              style={{ marginTop: 2, marginRight: 12, marginLeft: 10 }}
              onPress={() => this.handleLikeButton(post.id)}
            >
              {this.renderLikeIcon()}
            </TouchableOpacity>
            <Text style={styles.peopleLikeThis}>
              {`${post.agrees.count} ${peopleCount} this`}
            </Text>
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
