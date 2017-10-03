import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import { BackIcon } from '../../../ui/icons'

import styles from './styles'

export const EditInput = (props) => (
  <TextInput
    placeholder={props.placeholder}
    value={props.input}
    onChangeText={props.onChangeText}
    style={styles.editInput}
    placeholderTextColor="#95989A"          
  />
)

export const EditView = (props) => (
  <View style={{ flex: 1 }}>
    <View style={styles.topBar}>
      <TouchableOpacity style={{ position: 'absolute', left: 0, top: 24 }} onPress={() => Actions.pop()}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.pageName}>{props.pageName}</Text>
    </View>

    {props.children}

    <TouchableOpacity style={styles.saveBtn} onPress={props.onSubmit}>
      <Text style={styles.saveText}>Save</Text>
    </TouchableOpacity>
  </View>
)

EditView.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    React.Children.forEach(props[propName], (child) => {
      if (child.type !== EditInput) {
        return new Error(`${componentName} children should be of type EditInput`)
      }
    })
  },
  onSubmit: PropTypes.func.isRequired,
}

EditInput.propTypes = {
  placeholder: PropTypes.string
}

EditInput.defaultProps = {
  placeholder: "Placeholder"
}
