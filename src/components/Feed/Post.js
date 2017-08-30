import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import moment from 'moment'
// import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import {
  AgreeIcon,
  DisagreeIcon,
  MenuMore,
  AgreeIconPressed,
  DisagreeIconPressed,
} from '../../ui/icons'

import styles from './styles'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      agreePressed: false,
      disagreePressed: false,
    }
  }

  componentWillMount() {
    console.log('SECOND ONE', this.props.post.node.content)
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
    this.setState({ agreePressed: !this.state.agreePressed, disagreePressed: false })
    // this.props.postAgree(postId, this.state.user.uid)
  }

  handleDisagreeButton = (postId) => {
    this.setState({ disagreePressed: !this.state.disagreePressed, agreePressed: false })
    // this.props.postDisagree(postId)
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
            <TouchableOpacity style={{ marginTop: 1, marginRight: 12 }} onPress={() => this.handleAgreeButton(post.id)}>
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
