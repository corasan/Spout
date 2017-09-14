import React, { Component } from 'react'
import { FlatList } from 'react-native'
import SavedPost from './SavedPost'

const SavedPostsList = (props) => (
  <FlatList
    data={props.posts}
    renderItem={({item}) => <SavedPost post={item} /> }
    keyExtractor={(item, index) => index}
  />
)

export default SavedPostsList
