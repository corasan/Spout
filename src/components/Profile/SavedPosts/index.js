import React, { Component } from 'react'
import { FlatList } from 'react-native'
import ProfilePost from '../ProfilePost'

const SavedPostsList = (props) => (
  <FlatList
    data={props.posts}
    renderItem={({item}) => <ProfilePost post={item} /> }
    keyExtractor={(item, index) => index}
  />
)

export default SavedPostsList
