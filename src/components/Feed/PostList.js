import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, ListView, RefreshControl } from 'react-native'
import Post from './Post'

class PostList extends Component {
  static propTypes = {
    viewer: PropTypes.objectOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    }
  }

  renderRow = post => (
    <Post post={post} />
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.viewer.allPosts.edges)}
          renderRow={this.renderRow}
          enableEmptySections
          style={{ paddingHorizontal: 16 }}
          // refreshControl={
            // <RefreshControl
            //   refreshing={this.props.refreshing}
            //   onRefresh={() => this.onRefresh()}
            //   tintColor="#1ABC9C"
            //   title="Refreshing"
            //   titleColor="#34495E"
            // />
          // }
        />
      </View>
    )
  }
}

export default PostList
