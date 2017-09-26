import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import { BackIcon } from '../../../ui/icons'

import styles from './styles'

export class EditInput extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        value={this.state.input}
        onChangeText={(input) => this.setState({ input })}
        style={styles.editInput}
        placeholderTextColor="#95989A"          
      />
    )
  }
}

export const EditView = (props) => (
  <View style={{ flex: 1 }}>
    <View style={styles.topBar}>
      <TouchableOpacity style={{ position: 'absolute', left: 0, top: 24 }} onPress={() => Actions.pop()}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.pageName}>{props.pageName}</Text>
    </View>

    {props.children}

    <TouchableOpacity style={styles.saveBtn}>
      <Text style={styles.saveText}>Save</Text>
    </TouchableOpacity>
  </View>
)

EditView.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    const prop = props[propName]
    React.Children.forEach(prop, (child) => {
      if (child.type !== EditInput) {
        return new Error(`${componentName} children should be of type EditInput`)
      }
    })
  }
}

EditInput.propTypes = {
  placeholder: PropTypes.string
}

EditInput.defaultProps = {
  placeholder: "Placeholder"
}
