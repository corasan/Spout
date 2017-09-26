import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { BackIcon } from '../../ui/icons'

import styles from './styles'

// export const EditInput = (props) => (

// )

export const EditView = (props) => (
  <View style={{ flex: 1 }}>
    <View style={styles.topBar}>
      <View style={{ position: 'absolute', left: 0, top: 24 }}>
        <BackIcon />
      </View>
      <Text style={styles.pageName}>{props.pageName}</Text>
    </View>
  </View>
)
