import React from 'react'
import { View, Text, Dimensions } from 'react-native'

import styles from './styles'

const { width } = Dimensions.get('window')

export const TextSetting = (props) => (
  <View style={[styles.settingOptionContainer, { width }]}>
    <Text style={styles.settingOptionLabel}>{props.label}</Text>

    <Text style={styles.settingOptionData}>{props.data}</Text>
  </View>
)

export const SettingsSection = (props) => (
  <View style={styles.settingsSection}>
    <Text style={styles.settingsSectionTitle}>{props.sectionTitle}</Text>

    {props.children}
  </View>
)

