import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePost from '../ProfilePost'

const MyPostsList = (props) => (
  <FlatList
    data={props.posts}
    renderItem={({item}) => <ProfilePost post={item} />}
    keyExtractor={(item, index) => index}
  />
)

export default MyPostsList
