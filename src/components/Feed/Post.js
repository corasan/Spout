import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import moment from 'moment'
import _ from 'lodash'
// import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import {
  LikeIcon,
  MenuMore,
  LikeIconPressed,
  SavePostIcon,
} from '../../ui/icons'
import CreateAgree from '../../mutations/CreateAgreeMutation'

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
      <View style={styles.iconBox}>
        {pressed ? <LikeIconPressed /> : <LikeIcon />}
      </View>
    )
  }

  renderSavePostIcon = () => (
      <View style={styles.iconBox}>
        <SavePostIcon />
      </View>
  )

  renderMenuIcon = () => (
    <View style={styles.iconBox}>
      <MenuMore />
    </View>
  )

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
          <View style={[styles.postRow, { justifyContent: 'space-between', marginTop: 4 }]}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ marginTop: 2, marginRight: 12, marginLeft: 10 }}
                onPress={() => this.handleLikeButton(post.id)}
              >
                {this.renderLikeIcon()}
              </TouchableOpacity>
              <Text style={styles.iconPostText}>
                {`${post.agrees.count} ${peopleCount} this`}
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ marginTop: 2, marginRight: 12, marginLeft: -18 }}
                onPress={() => console.log('Save Pressed')}
              >
                {this.renderSavePostIcon()}
              </TouchableOpacity>
              <Text style={styles.iconPostText}>Save</Text>
            </View>

            
            <TouchableOpacity
              style={{ marginTop: 2, marginRight: 10 }}
            >
              {this.renderMenuIcon()}
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
