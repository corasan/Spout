import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { BACKGROUND_GRAY, TINT } from './ui/theme'
// import { CreatePostIcon } from './ui/icons'

import Login from './components/Login'
// import Signup from './components/Signup/'
import Feed from './components/Feed'
import Main from './components/Main'
// import CreatePost from './Components/CreatePost'


const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    height: 70,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  appBackground: {
    backgroundColor: BACKGROUND_GRAY,
  },
})

class Routes extends Component {
  // static propTypes = {
  //   openCreatePostModal: PropTypes.func.isRequired,
  //   createPostVisible: PropTypes.bool.isRequired,
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.createPostVisible !== nextProps.createPostVisible) {
  //     Actions.createPost()
  //   }
  // }

  openCreatePost = () => {
    // this.props.openCreatePostModal(!this.props.createPostVisible)
  }

  // renderRightButton = () => {
  //   return (
  //     <View style={{ marginRight: 5, marginTop: 3 }}>
  //       <TouchableOpacity onPress={() => this.openCreatePost()}>
  //         <CreatePostIcon />
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.title}>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar />
          {/* <Scene key="signup" component={Signup} hideNavBar /> */}
          <Scene
            key="main"
            component={Main}
            hideNavBar={false}
            title="Feed"
            titleStyle={{ fontFamily: 'ChalkboardSE-Bold', color: TINT, fontSize: 24, marginBottom: 2 }}
            hideBackImage
            // renderRightButton={() => this.renderRightButton()}
            sceneStyle={styles.appBackground}
          />
          {/* <Scene key="createPost" component={CreatePost} hideNavBar direction="vertical" /> */}
        </Scene>
      </Router>
    )
  }
}

export default Routes
