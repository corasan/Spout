import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { BACKGROUND_GRAY, TINT, MAIN } from './ui/theme'
import { CreatePostIcon } from './ui/icons'

import Login from './components/Login'
import Signup from './components/Signup/'
import Feed from './components/Feed'
import Main from './components/Main'
import CreatePost from './components/CreatePost'
import ChangeName from './components/Settings/ChangeViews/ChangeName'
import ChangeUsername from './components/Settings/ChangeViews/ChangeUsername'
import ChangeEmail from './components/Settings/ChangeViews/ChangeEmail'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: MAIN,
    borderBottomWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    height: 60,
    paddingRight: 8,
  },
})

class Routes extends Component {
  constructor() {
    super()
    this.state = {
      createPostVisible: false,
    }
  }

  openCreatePost = () => {
    Actions.createPost({ createPostVisible: true })
  }

  renderRightButton = () => {
    return (
      <View style={{ marginRight: 5, marginTop: 3 }}>
        <TouchableOpacity onPress={() => this.openCreatePost()}>
          <CreatePostIcon />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.title}
        sceneStyle={{ backgroundColor: '#F7F7F7' }}
      >
        <Scene key="root" hideNavBar>
          <Scene key="login" component={Login} />
          <Scene key="signup" component={Signup} />
          <Scene
            key="main"
            component={Main}
            hideBackImage
            renderRightButton={() => this.renderRightButton()}
          />
          <Scene
          key="createPost"
          component={CreatePost}
          visible={this.state.createPostVisible}
          direction="vertical"
          />
          <Scene key="changeName" component={ChangeName} />
          <Scene key="changeUsername" component={ChangeUsername} />
          <Scene key="changeEmail" component={ChangeEmail} />
        </Scene>
      </Router>
    )
  }
}

export default Routes
