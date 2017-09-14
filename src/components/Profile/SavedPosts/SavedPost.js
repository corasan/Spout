import React, { Component } from 'react'
import { View, Text, AsyncStorage, FlatList } from 'react-native'

const SavedPost = (props) => (
  <View key={props.id}>
    <Text>{props.post.node.content}</Text>
  </View>
)

export default SavedPost
