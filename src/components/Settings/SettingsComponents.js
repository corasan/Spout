import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Switch } from 'react-native'
import PropTypes from 'prop-types'
import { EditIcon } from '../../ui/icons'

import styles from './styles'

const { width } = Dimensions.get('window')

export const EditSetting = (props) => (
  <TouchableOpacity onPress={() => props.goTo()}>
    <View style={[styles.settingOptionContainer, { width }]}>
      <Text style={styles.settingOptionLabel}>{props.label}</Text>

      <Text style={styles.settingOptionData}>{props.data}</Text>

      <View style={{ position: 'absolute', right: 0 }}>
        <EditIcon />
      </View>
    </View>
  </TouchableOpacity>
)

export class SwitchSetting extends Component {
  state = {
    switchOn: true,
  }

  render() {
    return (
      <View style={styles.switch}>
        <Text style={styles.settingOptionLabel}>{this.props.label}</Text>

        <Switch
          onValueChange={switchOn => this.setState({ switchOn })}
          value={this.state.switchOn}
          style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
          disabled
        />
      </View>
    )
  }
}

export const SettingsSection = (props) => (
  <View style={styles.settingsSection}>
    <Text style={styles.settingsSectionTitle}>{props.sectionTitle}</Text>

    {props.children}
  </View>
)

EditSetting.propTypes = {
  goTo: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.string,
}

EditSetting.defaultProps = {
  goTo: () => console.log('goTo pressed'),
  data: '',
}

SettingsSection.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName]
    React.Children.forEach(prop, (child) => {
      if (child.type !== EditSetting || SwitchSetting) {
        return new Error(`${componentName} children should be of type EditSetting`)
      }
    })
  },
}
